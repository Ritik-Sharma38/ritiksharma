import { NextSeo } from 'next-seo';

const url = 'https://ritikdsharma.vercel.app/about';
const title = 'About Ritik Sharma';
const description =
  'about ritik sharma, next.js, react.js, react-native';

export default function About() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">
          Hey, I'm Ritik Sharma
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">
          I'm a full stack developer, React.js, Next.js, React-native, Flutter, Google 
          Coud Platform.
        </h2>
      </div>
    </>
  )
}
