import { NextSeo } from 'next-seo';

const title = 'Ritik Sharma';
const description = 'Full Stack Engineer';

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
				<h2 className="font-bold justify-left text-2xl md:text-5xl tracking-tight mb-4 dark:text-white">Ritik Sharma</h2>
				<p className="text-2xl text-gray-600 dark:text-gray-400">
					A Full Stack Developer currently looking for new a challenge
					{/* , experienced in React.js, Next.js, React-native, Flutter, Google */}
				</p>
			</div>
		</>
	);
}
