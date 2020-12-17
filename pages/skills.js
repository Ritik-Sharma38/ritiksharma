import { NextSeo } from 'next-seo';
import WebApps from './WebApps';
import MobApps from './MobApps';

const title = 'Skills - Ritik Sharma';
const description = 'Full Stack Engineer';

export default function Skills() {
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
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">
					<b>LANGUAGES: </b>
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
					Node.js, MongoDB, Git, GitHub, LATEX
				</h2>
			</div>
		</>
	);
}
