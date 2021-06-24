import axios, { AxiosResponse } from 'axios';
import { Position, Shop } from '@/types';
import { FooEndPoint } from '../lib/url';

type IndexResponse = {
  available_count: number;
  shops: Shop[];
};

type IndexPayload = {
  keyword?: string;
  position?: Position;
  range?: number;
  ids?: string[];
};

export class ShopsController {
  static index = async function (payload: IndexPayload): Promise<IndexResponse> {
    try {
      if (payload.keyword) {
        const endPoint = new FooEndPoint('/shops', {
          keyword: payload.keyword,
          range: payload.range!.toString(),
          count: '30',
        });
        const res = (await axios.get(endPoint.url)) as AxiosResponse<IndexResponse>;
        return res.data;
      } else {
        const endPoint = new FooEndPoint('/shops', {
          id: payload.ids!.join(),
        });
        const res = (await axios.get(endPoint.url)) as AxiosResponse<IndexResponse>;
        return res.data;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}
