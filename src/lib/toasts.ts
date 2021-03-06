import { ToastState } from '@/redux/types';

const success: ToastState = {
  type: 'success',
  message: '成功しました',
};

const error: ToastState = {
  type: 'error',
  message: '処理に失敗しました 再度お試しください',
};

const successEditing: ToastState = {
  type: 'success',
  message: '変更を保存しました',
};

const logIn: ToastState = {
  type: 'success',
  message: 'ログインしました',
};

const logOut: ToastState = {
  type: 'success',
  message: 'ログアウトしました',
};

export const toastTemplates = {
  success,
  error,
  successEditing,
  logIn,
  logOut,
};
