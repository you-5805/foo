import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Flex, Spacer } from '@/components/utilities';
import { ToastState } from '@/redux/types';

type Props = {
  toast: ToastState;
  closeToast: () => void;
};

export const Toast: React.VFC<Props> = ({ toast, closeToast }) => {
  const [hide, setHide] = useState<boolean>(true);

  useEffect(() => {
    setHide(false);
    setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        closeToast();
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div
      className={cn({
        ['transform transition-transform']: true,
        ['translate-x-full']: hide,
      })}
    >
      <div
        className={cn({
          ['fixed left-auto top-8 right-4 md:right-8 w-4/5 sm:w-3/4 md:w-1/2 lg:w-2/5 h-12 rounded-lg p-2 border shadow-lg']:
            true,
          ['border-green-300 bg-green-100']: toast.type === 'success',
          ['border-red-500 bg-red-100']: toast.type === 'error',
        })}
      >
        <Flex aCenter className="h-full">
          {toast.type === 'success' ? <span>🎉</span> : <span>🤔</span>}
          <Spacer w={3} />
          <p>{toast.message}</p>
        </Flex>
      </div>
    </div>
  );
};
