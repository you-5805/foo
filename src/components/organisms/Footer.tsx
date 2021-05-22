import React from 'react';
import { NavMenu } from '../../types/index';
import { TextLink } from '../atoms';
import { RowFlexContainer, Spacer } from '../utilities';

export const Footer: React.VFC = () => {
  const menus: NavMenu[] = [
    { text: 'プライバシーポリシー', href: '/about/privacy_policy' },
    { text: '管理者について', href: '/about/manager' },
    { text: 'お問い合わせ', href: '/about/contact' },
  ];

  return (
    <footer className="flex flex-col pt-3 pb-16 px-4 bg-text">
      <RowFlexContainer extraClasses="w-68 mx-auto">
        {menus.map((menu, index) => (
          <div key={index}>
            <TextLink {...menu} key={index + 1} />
            {menu.text !== 'お問い合わせ' && (
              <span key={index + 2} className="px-1 font-thin">
                /
              </span>
            )}
          </div>
        ))}
      </RowFlexContainer>
      <Spacer h={6} />
      <div className="w-24 mx-auto">
        <a href="https://webservice.recruit.co.jp/">
          <img
            src="https://webservice.recruit.co.jp/banner/hotpepper-m.gif"
            alt="ホットペッパー Webサービス"
            width="88"
            height="35"
            title="ホットペッパー Webサービス"
          />
        </a>
      </div>
    </footer>
  );
};
