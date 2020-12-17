import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const title = 'Ritik Sharma';
const description = "Ritik Sharma's projects";

export default function WebApps() {
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					title,
					description,
				}}
			/>
			<div className="flex flex-col justify-center items-start max-w-2xl mb-10">
				<ProjectCard
					title="Performance testing using Server-side-rendering"
					description="Developed and deployed a server-side rendered blog website using Next.js with Prisma and MySQL integration. Tested the website’s server response and performance in contrast to static, universal, and client-side rendered websites based on server-response time, DOM loading and processing, speed
                    ̈ index, time to first byte, and final interactive time"
					href="https://wdl-blog.vercel.app/"
					// icon="nextjs"
				/>
				{/* <ProjectCard
					title="Moonlight & Sunshine"
					description="A Blog Website"
					href="https://wdl-blog.vercel.app/"
					// icon="nextjs"
				/> */}
			</div>
		</>
	);
}
