import React from 'react';
import { HeartIcon, HeartOutlineIcon } from '@/components/atoms/Icons';

type Props = {
  likeState: boolean;
  onClick: () => void;
};

export const Like: React.VFC<Props> = ({ likeState, onClick }) => {
  return (
    <div className="text-4xl cursor-pointer" onClick={onClick}>
      {likeState ? (
        <HeartIcon className="text-main" />
      ) : (
        <HeartOutlineIcon className="text-gray-700" />
      )}
    </div>
  );
};
