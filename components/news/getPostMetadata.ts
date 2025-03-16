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
                
                if (!content.trim()) {
                    return null;
                }

                // 使用更宽松的正则表达式来匹配标题和日期
                const titleMatch = content.match(/title:\s*(?:["']([^"']+)["']|([^\n]+))/);
                const dateMatch = content.match(/date:\s*(?:["']([^"']+)["']|([^\n]+))/);

                if (!titleMatch || !dateMatch) {
                    return null;
                }

                const post: PostMetadata = {
                    slug: file.replace(".md", ""),
                    title: titleMatch[1] || titleMatch[2],
                    date: dateMatch[1] || dateMatch[2],
                    subtitle: "",
                };

                return post;
            } catch (error) {
                return null;
            }
        })
        .filter((post): post is PostMetadata => post !== null)
        .sort((a, b) => {
            // 按文件名（slug）降序排序，确保最新的文章在前面
            return b.slug.localeCompare(a.slug);
        });
};

export default getPostMetadata; 