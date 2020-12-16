import { NextSeo } from 'next-seo'
import WebApps from './WebApps'
import MobApps from './MobApps'

const url = 'https://ritikdsharma.vercel.app/projects';
const title = 'android development, web development';
const description =
  'projects react.js, react-native, next.js, mobile development, web development.';

export default function Project() {
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
                    Projects
                </h1>
                <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-10">
                    Web application development, Mobile android/ios application development & Machine Learning.
                </h2>
                <h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Web application development
                </h2>
                <h3 className="dark:text-gray-300 mb-5">
                    React.js, Next.js
                </h3>
                <WebApps />
                <h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Mobile android/ios application development
                </h2>
                <h3 className="dark:text-gray-300 mb-5">
                    React-Native, Flutter
                </h3>
                <MobApps />
            </div>
        </>
    )
}
  