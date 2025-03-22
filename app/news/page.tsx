import React from 'react'
import PostPreview from '../../components/news/PostPreview'
import { Button } from '../../components/ui/button'
import Link from "next/link";
import { PostMetadata } from '../../components/news/PostMetadata'
import Image from 'next/image'
import getPostMetadata from '../../components/news/getPostMetadata';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ニュース',
  description: 'J-unicornからの最新ニュースとお知らせをご覧ください。日本の投資市場の最新情報をお届けします。',
  openGraph: {
    title: 'ニュース | J-unicorn',
    description: 'J-unicornからの最新ニュースとお知らせをご覧ください。日本の投資市場の最新情報をお届けします。',
    images: [
      {
        url: '/img/message/background.jpg',
        width: 1200,
        height: 630,
        alt: 'J-unicorn ニュース',
      },
    ],
  },
}

type Data = {
    heading: string
    title: string
    image: string
}

export default async function NewsPage() {
    const posts = await getPostMetadata();

    return (
        <div className="bg-black">
            <div className="relative w-full h-[500px]">
                <Image
                    src="/img/message/background.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className='text-center'>
                        <h1 className='text-5xl md:text-6xl font-bold tracking-tight text-yellow-400' style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>
                            NEWS
                        </h1>
                        <h2 className='text-2xl md:text-3xl font-bold tracking-tight text-white mt-4'>
                            ニュース
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[90vw] xl:max-w-[1280px] h-auto mx-auto overflow-hidden flex md:justify-between flex-col pt-8">
                <div className="max-w-3xl mx-auto w-full">
                    <div className="divide-y divide-gray-700">
                        {posts.map((post: PostMetadata) => (
                            <PostPreview key={post.slug} {...post} />
                        ))}
                    </div>
                </div>
                <div className='max-w-3xl mx-auto text-center pb-8'>
                    <div className='mt-4'>
                        <Link href="/">
                            <Button className='text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-300 font-semibold rounded-full px-16 py-4'>
                                トップページに戻る
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
