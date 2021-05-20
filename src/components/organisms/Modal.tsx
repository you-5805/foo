import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, UtilityState } from '../../redux/types';
import { closeModalAction } from '../../redux/utilities/actions';

import { PrimaryButton } from '../atoms';
import { TimesIcon, PlaneIcon, CheckCircleIcon } from '../atoms/Icons';
import { Spacer } from '../utilities';

export const Modal: React.VFC = () => {
  const { modal } = useSelector<State, UtilityState>(state => state.utilities);

  const dispatch = useDispatch();
  const closeModal = (): void => {
    dispatch(closeModalAction());
  };

  return (
    <div className="absolute w-full h-full text-gray-700">
      <div
        className="fixed w-full h-full z-30 bg-black opacity-40"
      />
      <div
        className="fixed w-4/5 sm:w-1/2 lg:w-1/3 min-h-3/5 z-40 bg-white rounded-lg top-1/6 left-1/10 sm:left-1/4 lg:left-1/3 opacity-100 p-8"
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <TimesIcon className="cursor-pointer" onClick={closeModal} size={30} />
          </div>
          <Spacer h={6} />
          <div className="flex justify-center">
            {modal.type === 'mail'
              ? <PlaneIcon className="text-main" size={90} />
              : <CheckCircleIcon className="text-main" size={90} />
            }
          </div>
          <Spacer h={8} />
          <h1 className="text-lg sm:text-xl text-center font-bold whitespace-nowrap">{modal.title}</h1>
          <Spacer h={6} />
          <p className="text-sm">{modal.message}</p>
          <Spacer h={6} />
          <PrimaryButton text="確認" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};