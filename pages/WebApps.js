import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const url = 'https://ritikdsharma.vercel.app/projects';
const title = 'Ritik Sharma';
const description = "Ritik Sharma's projects";

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
					description,
				}}
			/>
			<div className="flex flex-col justify-center items-start max-w-2xl mb-10">
				<ProjectCard
					title="Performance testing using Server-side-rendering"
					description="A Blogging Website built using Next.js"
					href="https://wdl-blog.vercel.app/"
					// icon="nextjs"
				/>
                <ProjectCard
					title="Moonlight & Sunshine"
					description="A Blog Website"
					href="https://wdl-blog.vercel.app/"
					// icon="nextjs"
				/>
			</div>
		</>
	);
}
