import React from 'react';
import { Heading, SubHeading, Image } from '@/components/atoms';
import { Spacer } from '@/components/utilities';
import { useFadeIn } from '@/hooks/useFadeIn';

export const About: React.VFC = () => {
  const fadeInStyle = useFadeIn();
  const waiterImageUrl = '/images/waiter.png';
  const shareImageUrl = '/images/share.png';

  return (
    <div className={fadeInStyle()}>
      <Spacer h={6} />
      <Heading>
        <span className="text-main">Foo</span>
        とは？
      </Heading>
      <Spacer h={12} />
      <section className="w-5/6 lg:w-4/5 xl:w-1/2 mx-auto flex flex-col sm:flex-row justify-between items-center text-left">
        <div className="w-full">
          <SubHeading>ひとりで楽しめるお店を、すぐに見つける。</SubHeading>
          <Spacer h={6} />
          <p>
            行ったことがないお店は雰囲気が分からず、「ひとり客は自分だけかも…？」と、少し入りにくく感じてしまうもの。
            <br />
            Fooでは、ユーザーが、ひとりで食べに行ったお店に Foo! (フー) することができます。
            他のユーザーの声を参考に、お店を選んでみましょう。
          </p>
        </div>
        <Spacer w={6} />
        <div className="w-full sm:w-1/4">
          <Image src={waiterImageUrl} width={400} height={400} />
        </div>
      </section>
      <Spacer h={12} />
      <section className="w-5/6 lg:w-4/5 xl:w-1/2 mx-auto flex flex-col-reverse sm:flex-row justify-between items-center text-left">
        <div className="w-full sm:w-1/4">
          <Image src={shareImageUrl} width={400} height={400} />
        </div>
        <Spacer w={6} />
        <div className="w-full sm:w-3/4">
          <SubHeading>気に入ったお店を、みんなに教える。</SubHeading>
          <Spacer h={6} />
          <p>
            もし、行ったお店をとても気に入って、みんなに教えたいのなら、Fooではあなたが行ったお店やそのリストを、簡単にシェアすることができます。
          </p>
        </div>
      </section>
      <Spacer h={12} />
    </div>
  );
};
