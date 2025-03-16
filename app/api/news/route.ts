import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const folder = "markdown/news/";
        const files = fs.readdirSync(folder);

        const posts = files
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

                    return {
                        slug: file.replace(".md", ""),
                        title: titleMatch[1] || titleMatch[2],
                        date: dateMatch[1] || dateMatch[2],
                        subtitle: "",
                    };
                } catch (error) {
                    return null;
                }
            })
            .filter(post => post !== null)
            .sort((a, b) => {
                return b.slug.localeCompare(a.slug);
            });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
} 