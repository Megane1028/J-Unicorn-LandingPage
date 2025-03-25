import Script from 'next/script'

interface VideoSchemaProps {
  videoUrl: string
  thumbnailUrl: string
  title: string
  description: string
  uploadDate: string
}

export default function VideoSchema({
  videoUrl,
  thumbnailUrl,
  title,
  description,
  uploadDate,
}: VideoSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: videoUrl,
    embedUrl: videoUrl,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 0
    }
  }

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 