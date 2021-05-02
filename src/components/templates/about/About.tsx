import React from 'react';
import { Heading } from '../../atoms/typography/Heading';
import { SubHeading } from '../../atoms/typography/SubHeading';
import Image from 'next/image';

export const About: React.VFC = () => {
  const distanceImageUrl = '/images/distance.png';
  const shareImageUrl = '/images/share.png';
  
  return (
    <>
      <div className="h-8" />
      <Heading>
        <span className="text-main">
          Foo
        </span>
        とは？
      </Heading>
      <div className="h-12" />
      <section className="w-4/5 sm:w-3/4 md:w-3/5 mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-3/4">
          <SubHeading>
            ひとりで楽しめるお店を、すぐに見つける。
          </SubHeading>
          <div className="h-4" />
          <p>
            行ったことがないお店は雰囲気が分からず、「ひとりで入ったら迷惑かも…？」と、少し入りにくく感じてしまうもの。
            <br/>これからはFooで、あなたのお気に入りのお店を見つけましょう。
          </p>
        </div>
        <div className="w-4" />
        <div className="w-full sm:w-1/4">
          <Image src={distanceImageUrl} width={400} height={400}/>
        </div>
      </section>
      <div className="h-12" />
      <section className="w-4/5 sm:w-3/4 md:w-3/5 mx-auto flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/4">
          <Image src={shareImageUrl} width={400} height={400}/>
        </div>
        <div className="w-4" />
        <div className="w-full sm:w-3/4">
          <SubHeading>
            気に入ったお店を、みんなに教える。
          </SubHeading>
          <div className="h-4" />
          <p>
            「ひとりでも入りやすかったよ」という声があると、他の人にとっても、よりそのお店に行きやすくなります。
            <br/>お気に入りのお店ができたら、ぜひ感想を添えてみんなに教えてあげましょう。
          </p>
        </div>
      </section>
      <div className="h-12" />
    </>
  );
}