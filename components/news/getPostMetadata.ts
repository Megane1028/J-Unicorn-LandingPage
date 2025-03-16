import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    subtitle?: string;
}

const getPostMetadata = (): PostMetadata[] => {
    const folder = "markdown/news/";
    const files = fs.readdirSync(folder);

    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            try {
                const filePath = path.join(folder, file);
                const content = fs.readFileSync(filePath, "utf8");
                console.log(`Processing file: ${filePath}`);
                
                // 检查文件内容是否为空
                if (!content.trim()) {
                    console.error(`File is empty: ${filePath}`);
                    return null;
                }

                // 检查 frontmatter 的开始标记
                if (!content.trim().startsWith('---')) {
                    console.error(`Invalid frontmatter format in file: ${filePath}`);
                    return null;
                }

                // 检查 frontmatter 的结束标记
                const frontmatterEnd = content.indexOf('---', 3);
                if (frontmatterEnd === -1) {
                    console.error(`Missing closing frontmatter delimiter in file: ${filePath}`);
                    return null;
                }

                // 提取 frontmatter 内容
                const frontmatterContent = content.substring(3, frontmatterEnd).trim();
                console.log('Frontmatter content:', frontmatterContent);

                const { data } = matter(content);

                if (!data.title || !data.date) {
                    console.error(`Missing required metadata in file: ${filePath}`);
                    console.error('Available metadata:', data);
                    return null;
                }

                const post: PostMetadata = {
                    slug: file.replace(".md", ""),
                    title: data.title,
                    date: data.date,
                    subtitle: data.subtitle || undefined,
                };

                return post;
            } catch (error) {
                console.error(`Error processing file ${file}:`, error);
                return null;
            }
        })
        .filter((post): post is PostMetadata => post !== null);
};

export default getPostMetadata; 