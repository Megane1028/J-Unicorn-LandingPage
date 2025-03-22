// src/app/news/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, Params } from '../../../types'; // 引入类型定义
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { Metadata } from 'next';

// 获取所有文章的元数据
const getPostMetadata = (): { slug: string; title: string }[] => {
    const folder = 'markdown/news/';
    const files = fs.readdirSync(folder);

    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            try {
                const content = fs.readFileSync(path.join(folder, file), 'utf8');
                const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
                
                if (!titleMatch) {
                    console.error(`Missing title in file: ${file}`);
                    console.error('Content:', content);
                    return null;
                }

                const slug = file.replace('.md', '');
                console.log(`Processing file: ${file}, slug: ${slug}`);
                
                return {
                    slug: slug,
                    title: titleMatch[1],
                };
            } catch (error) {
                console.error(`Error processing file ${file}:`, error);
                return null;
            }
        })
        .filter(post => post !== null);
};

// 获取单篇文章的内容
const getPostContent = (slug: string): PostData | null => {
    const folder = 'markdown/news/';
    const filePath = path.join(folder, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return null;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`Reading file: ${filePath}`);
        
        if (!content.trim()) {
            console.error(`File is empty: ${filePath}`);
            return null;
        }

        // 使用更宽松的正则表达式来匹配标题和日期
        const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
        const dateMatch = content.match(/date:\s*["']([^"']+)["']/);

        if (!titleMatch || !dateMatch) {
            console.error(`Missing required metadata in file: ${filePath}`);
            console.error('Content:', content);
            return null;
        }

        // 提取文章内容
        const contentStart = content.indexOf('---', content.indexOf('---') + 3) + 3;
        const postContent = content.slice(contentStart).trim();

        // 格式化日期
        const date = new Date(dateMatch[1]);
        const formattedDate = date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return {
            title: titleMatch[1],
            date: formattedDate,
            content: postContent,
        };
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
        return null;
    }
};

// 静态参数生成函数
export const generateStaticParams = async (): Promise<Params[]> => {
    const folder = 'markdown/news/';
    const files = fs.readdirSync(folder);

    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const slug = file.replace('.md', '');
            console.log(`Generating params for file: ${file}, slug: ${slug}`);
            return {
                slug: slug
            };
        });
};

// 生成动态元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filePath = path.join('markdown/news', `${params.slug}.md`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    
    return {
      title: data.title,
      description: data.subtitle || `${data.title}についての詳細情報をご覧ください。`,
      openGraph: {
        title: `${data.title} | J-unicorn ニュース`,
        description: data.subtitle || `${data.title}についての詳細情報をご覧ください。`,
        type: 'article',
        publishedTime: data.date,
        images: [
          {
            url: '/img/message/background.jpg',
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'ニュース記事 | J-unicorn',
      description: 'J-unicornからの最新ニュースをご覧ください。',
    };
  }
}

// 动态路由页面组件
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = getPostContent(slug); // 获取文章内容

    if (!post) {
        notFound(); // 如果没有找到文章内容，显示 404 页面
    }

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
                <div className="max-w-3xl mx-auto my-12 text-center">
                    <h1 className="text-xl text-white font-semibold md:text-2xl">
                        {post.title}
                    </h1>
                    <p className="text-gray-300 mt-2">{post.date}</p>
                </div>
                <article className="prose lg:prose-base flow-root max-w-3xl mx-auto text-white">
                    <Markdown>{post.content}</Markdown>
                </article>
                <div className='max-w-3xl mx-auto text-center pb-8'>
                    <div className='mt-4'>
                        <Link href="/news">
                            <Button className='text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-300 font-semibold rounded-full px-16 py-4'>
                                ニュースリスト
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
