import Link from "next/link";

interface PostPreviewProps {
    slug: string;
    title: string;
    date: string;
    subtitle?: string;
}

const PostPreview = ({ slug, title, date }: PostPreviewProps) => {
    return (
        <div className="flex flex-col gap-2 py-6 md:gap-6 md:flex-row md:items-center px-4">
            <p className="w-32 md:text-lg text-gray-300 md:text-right shrink-0">{date}</p>
            <Link href={`news/${slug}`} className='hover:underline'>
                <h2 className="md:text-lg md:font-semibold text-white">{title}</h2>
            </Link>
        </div>
    );
};

export default PostPreview;