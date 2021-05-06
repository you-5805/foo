import React from "react";

export type NavMenu = {
  text: string;
  href: string;
}

export type DrawerMenu = {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export interface Shop {
  address: string;
  barrier_free: string;
  budget: {
    average: string;
    name: string;
  };
  capacity: number;
  // card: '利用可' | '利用不可';
  catch: string;
  english: AriOrNashi;
  lat: number;
  lng: number;
  photo: ShopPhoto;
  lunch: AriOrNashi;
  name: string;
  name_kana: string;
  parking: string;
  non_smoking: string;
  open: string;
  station_name: string;
  urls: ShopUrls;
  wifi: AriOrNashi;
}

export interface ShopPhoto {
  pc: {
    l: string;
  };
};

export interface ShopUrls {
  pc: string;
}

type AriOrNashi = 'あり' | 'なし';

export interface HotpepperResponse {
  results_available: number;
  shop: Shop[];
}

export type AuthPayload = {
  email: string;
  password: string;
}

export type SignUpPayload = AuthPayload;
export type LogInPayload = AuthPayload;

export type FirebaseUid = string;