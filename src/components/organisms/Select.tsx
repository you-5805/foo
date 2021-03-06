import { Shop } from '@/types';
import React, { useState } from 'react';

type Props = {
  shops: Shop[];
};

export const Select: React.VFC<Props> = ({ shops }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-1/2 mx-auto">
      <label id="listbox-label" className="block text-sm font-medium text-gray-700">
        お店を選択
      </label>
      <div className="mt-1 relative">
        <button
          type="button"
          onClick={toggle}
          onBlur={() => {
            setOpen(false);
          }}
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <img src={shops[0].photo} alt={shops[0].name_kana} className="flex-shrink-0 h-6 w-6 rounded-full" />
            <span className="ml-3 block truncate">{shops[0].name}</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        {open && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {shops.map((shop) => (
              <li
                className="cursor-pointer hover:bg-red-50 select-none relative py-2 pl-3 pr-9"
                id="listbox-option-0"
                role="option"
              >
                <div className="flex items-center">
                  <img src={shop.photo} alt={shop.name_kana} className="flex-shrink-0 h-6 w-6 rounded-full" />
                  <span className="font-normal ml-3 block truncate">{shop.name}</span>
                </div>

                <span className="text-main absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
