import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard'

const url = 'https://ritikdsharma.vercel.app/projects';
const title = 'Ritik Sharma';
const description = 'Full Stack Engineer';

export default function WebApps() {
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
            <div className="flex flex-col justify-center items-start max-w-2xl mb-10">
                <ProjectCard
                    title="Moonlight & Sunshine"
                    description="A blog website developed using next.js and Mysql database"
                    href="https://wdl-blog.vercel.app/"
                    // icon="nextjs"
                />
            </div>
        </>
    )
}
  