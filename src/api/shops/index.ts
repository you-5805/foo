import { axios } from '../axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Shop } from '../../types';
import { GetLikesResponse } from '../types';

export const likeShop = async (hotpepper_id: string): Promise<void> => {
  try {
    const params = { hotpepper_id };
    const res = axios.post('/shops/likes', params);
  } catch (err) {
    throw err;
  }
};

export const getLikes = async (shops: Shop[]): Promise<boolean[]> => {
  try {
    const ids: string[] = [];
    shops.map(shop => ids.push(shop.id));
    const params = { ids: ids }
    const res = await axios.post('/shops/likes', params) as AxiosResponse<GetLikesResponse>;
    return res.data.result;
  } catch (err) {
    throw err;
  }
};