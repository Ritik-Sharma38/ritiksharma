import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const url = 'https://ritikdsharma.vercel.app/projects';
const title = 'Ritik Sharma';
const description = 'Full Stack Engineer';

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
					description,
				}}
			/>
			<div className="flex flex-col justify-center items-start max-w-2xl">
				<ProjectCard
					title="CogAn-Friend"
					description="Android/iOS app for  "
					href="/projects"
					// icon="react2025"
				/>
			</div>
		</>
	);
}
