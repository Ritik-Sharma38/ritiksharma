import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const title = 'Ritik Sharma';
const description = "Ritik Sharma's contact";

const ExternalLink = ({ href, children }) => (
	<a
		className="text-sm text-gray-500 hover:text-gray-600 transition"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{children}
	</a>
);
export default function About() {
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
			<div className="flex flex-col justify-center items-start max-w-1xl mx-auto mb-16">
				<h2 className="font-bold justify-left text-2xl md:text-5xl tracking-tight mb-4 dark:text-white">
					Ritik Sharma
				</h2>
				<p className="text-2xl text-gray-600 dark:text-gray-400">
					Full Stack Dev and Tech Lead at Edvora &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</p>
			</div>
			<div className="justify-center items-start max-w-2xl mx-auto mb-16">
				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
					Want to collaborate? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</h2>
				{/* </div>
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16"> */}
				<h3 className="dark:text-gray-300 mb-5">
					<b>Please feel free to contact me</b>
				</h3>
				<br />
				<ProjectCard
					title="Email me:"
					description="
                        rd@ritiksharma.in
						"
					href="mailto:rd@ritiksharma.in"
				/>
				<ProjectCard
					title="Call me:"
					description="
					+91 7977280437
                        "
				/>
				<ProjectCard
					title="Follow me on GitHub:"
					description="
					@Ritik-Sharma38
						"
					href="https://github.com/Ritik-Sharma38"
				/>

				{/* <h3 className="dark:text-gray-300 mb-5">Let's work and build something awesome together</h3> */}
			</div>
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
					Let's build something awesome together
				</h2>
			</div>
		</>
	);
}
