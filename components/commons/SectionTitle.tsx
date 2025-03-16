'use client'

interface MessageProps {
    data: {
        heading: string
        title: string
        image?: string
    }
}
const SectionTitle: React.FC<MessageProps> = ({ data }) => {
    const { heading, title, image } = data;

    return (
        <div className='h-72 w-full relative flex items-center justify-center bg-contain bg-no-repeat bg-center'>
            {image && (
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${image})`, opacity: 0.9 }}  // 设置透明度为 0.8
                />
            )}
            <div className='relative z-9 text-center'>
                <h1 className='text-2xl text-bluetheme-100 tracking-wider' style={{ textShadow: '1px 1px 4px black' }}>
                    {heading}
                </h1>
                <p className='text-3xl text-center md:text-4xl font-bold px-2 md:px-0 pt-6 whitespace-pre-wrap tracking-wider leading-8' >
                    {title}
                </p>
            </div>
        </div>
    );
}


export default SectionTitle