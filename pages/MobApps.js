import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard'

const url = 'https://ritikdsharma.vercel.app/projects';
const title = 'Android/ios application development';
const description =
  'React-Native, Flutter android ios application development';

export default function MobApps() {
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
            <div className="flex flex-col justify-center items-start max-w-2xl">
                <ProjectCard
                    title="CogAn-Friends"
                    description="A android and ios application for detecting user depression"
                    href="/projects"
                    icon="react2025"
                />
            </div>
        </>
    )
}
  