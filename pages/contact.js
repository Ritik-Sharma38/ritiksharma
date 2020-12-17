import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const url = 'https://ritikdsharma.vercel.app/about';
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
				canonical={url}
				openGraph={{
					url,
					title,
					description,
				}}
			/>
			<div className="flex flex-col justify-center items-start max-w-1xl mx-auto mb-16">
				<h2 className="font-bold justify-left text-2xl md:text-5xl tracking-tight mb-4 dark:text-white">
					Ritik Sharma
				</h2>
				<p className="text-2xl text-gray-600 dark:text-gray-400">
					A Full Stack Developer currently looking for new a challenge
					{/* , experienced in React.js, Next.js, React-native, Flutter, Google */}
				</p>
			</div>
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">
					{/* <b>LANGUAGES: </b>
					Python, Bash, Java, JavaScript, TypeScript, CSS3, SASS, C/C++, PHP
					<br />
					<b>FRAMEWORKS: </b>
					React, Next.js, React Native, TensorFlow, Keras
					<br />
					<b>SOFTWARES: </b>
					Visual Studio Code, Android Studio, Tableau, Weka
					<br />
					<b>DOMAIN: </b>
					Mobile App Development, Website Development, Machine Learning, Deep Learning, Computer Vision
					<br />
					<b>CLOUD: </b>
					React, Next.js, React Native, TensorFlow, Keras
					<br />
					<b>TOOLS: </b>
					Node.js, MongoDB, Git, GitHub, LATEX */}

					<ProjectCard
						title="Contact Me"
						description="
                        Drop me an email at ritikdsharma@gmail.com or follow me on GitHub 
                        "
					/>
				</h2>
			</div>
		</>
	);
}
