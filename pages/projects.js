import { NextSeo } from 'next-seo';
import WebApps from './WebApps';
import MobApps from './MobApps';
import Skills from './skills';

const title = 'Projects - Ritik Sharma';
const description = 'Full Stack Engineer';

export default function Project() {
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
				<h3 className="font-bold text-1xl md:text-3xl tracking-tight mb-4 dark:text-white">
					Below is a collection of my most interesting projects
				</h3>
				<br />
				{/* <h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">
					Some of my most interesting projects
				</h2>  */}
				{/* <Skills /> */}
				{/* <h2 className="font-bold text-4xl tracking-tight mb-2 dark:text-white">Some of my most intersting projects</h2> */}
				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Website Development</h2>
				<h3 className="dark:text-gray-300 mb-5">React.js, Next.js</h3>
				<WebApps />
				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
					Cross-platform App Development
				</h2>
				<h3 className="dark:text-gray-300 mb-5">React-Native, Flutter</h3>
				<MobApps />
			</div>
		</>
	);
}

// import { NextSeo } from 'next-seo';
// import WebApps from './WebApps';
// import MobApps from './MobApps';

// const url = 'https://ritikdsharma.vercel.app/projects';
// const title = 'Ritik Sharma';
// const description = 'Full Stack Engineer';

// export default function Project() {
// 	return (
// 		<>
// 			<NextSeo
// 				title={title}
// 				description={description}
// 				canonical={url}
// 				openGraph={{
// 					url,
// 					title,
// 					description,
// 				}}
// 			/>
// 			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
// 				{/* <h1 className="font-bold text-1xl md:text-5xl tracking-tight mb-4 dark:text-white">Experience</h1> */}
// 				<h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">
// 					<b>LANGUAGES: </b>
// 					Python, Bash, Java, JavaScript, TypeScript, CSS3, SASS, C/C++, PHP
// 					<br />
// 					<b>FRAMEWORKS: </b>
// 					React, Next.js, React Native, TensorFlow, Keras
// 					<br />
// 					<b>SOFTWARES: </b>
// 					Visual Studio Code, Android Studio, Tableau, Weka
// 					<br />
// 					<b>DOMAIN: </b>
// 					Mobile App Development, Website Development, Machine Learning, Deep Learning, Computer Vision
// 					<br />
// 					<b>CLOUD: </b>
// 					React, Next.js, React Native, TensorFlow, Keras
// 					<br />
// 					<b>TOOLS: </b>
// 					Node.js, MongoDB, Git, GitHub, LATEX
// 				</h2>
// 				{/* <h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">

// 				</h2> */}
// 				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Web application development</h2>
// 				<h3 className="dark:text-gray-300 mb-5">React.js, Next.js</h3>
// 				<WebApps />
// 				<h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">
// 					Mobile Android/iOS Application Development
// 				</h2>
// 				<h3 className="dark:text-gray-300 mb-5">React-Native, Flutter</h3>
// 				<MobApps />
// 			</div>
// 		</>
// 	);
// }
