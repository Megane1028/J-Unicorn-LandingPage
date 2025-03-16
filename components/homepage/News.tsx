'use client'

import React, { useEffect, useState } from 'react'
import SectionTitle from '../commons/SectionTitle'
import PostPreview from '../news/PostPreview'
import { Button } from '../ui/button'
import Link from "next/link";
import Image from 'next/image';

interface Post {
    slug: string;
    title: string;
    date: string;
    subtitle?: string;
}

export default function News() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                const latestPosts = data.slice(0, 5);
                setPosts(latestPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch posts');
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="bg-black">
            <div className="relative w-full h-[300px]">
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
                <div className='w-full mx-auto bg-black'>
                    <div className='flow-root max-w-3xl mx-auto mt-0'>
                        {error ? (
                            <div className="text-white text-center py-4">{error}</div>
                        ) : (
                            <div className="divide-y divide-gray-700">
                                {posts.map((post) => (
                                    <PostPreview key={post.slug} {...post} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className='max-w-3xl mx-auto text-center pb-8'>
                    <div className='mt-4'>
                        <Link href="/news">
                            <Button className='text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-300 font-semibold rounded-full px-16 py-4'>
                                ニュースリストを見る
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}