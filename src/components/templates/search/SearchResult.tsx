import React, { useState, useEffect } from "react";

import { Shop } from "../../../types";
import { searchWithText } from '../../../api/restaurants';
import { useGeneralState } from '../../../ducks/general/selectors';
import generalSlice from '../../../ducks/general/slice';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';
import { Loader } from "../../atoms";
import { Card } from "../../molecules";
import { ColumnFlexContainer, RowFlexContainer, Vertical6, Vertical12 } from '../../utilities';

export const SearchResult: React.VFC = () => {
  const router = useRouter(),
        searchText = router.query.word as string,
        [count, setCount] = useState<number>(0),
        [shops, setShops] = useState<Shop[]>([]);

  const state = useGeneralState().general,
        dispatch = useDispatch(),
        startLoading = () => dispatch(generalSlice.actions.startLoading()),
        endLoading = () => dispatch(generalSlice.actions.endLoading());

  useEffect(() => {
    startLoading();
    if (searchText) {
      searchWithText(searchText).then(response => {
        setCount(response.results_available);
        setShops(response.shop);
        endLoading();
      })
    }
  }, [searchText]);
  
  return (
    <div className="w-full sm:w-10/12 xl:w-3/5 mx-auto">
      <Vertical6 />
      <RowFlexContainer extraClasses="px-2" >
        <h1 className="text-xl font-bold">「{searchText}」の検索結果</h1>
        <h2>{count} 件</h2>
      </RowFlexContainer>
      <Vertical6 />
      <div className="mx-4">
        {state.isLoading
          ? <>
              <Vertical12 />
                <Loader />
              </>
          : <>
              {shops === undefined
                ? <h1>エラーが発生しました。</h1>
                : <>
                    {shops.length === 0
                      ? <>
                          <h1>お店が見つかりませんでした。
                          <br/>キーワードを変えてもう一度調べてみましょう。</h1>
                        </>
                      : <ColumnFlexContainer>
                          {shops.map((shop, index) => (
                            <Card {...shop} catchPhrase={shop.catch} key={index} />
                          ))}
                        </ColumnFlexContainer>
                    }
                  </>
              }
            </>
        }
      </div>
      <Vertical12 />
    </div>
  );
}