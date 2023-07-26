import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

const title = 'Ritik Sharma';
const description = 'Full Stack Engineer';

export default function About() {
	const router = useRouter()
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
			<div onClick={()=>router.push('/contact')} className="flex flex-col justify-center items-start max-w-1xl mx-auto mb-16">
				<h2 className="font-bold text-2xl md:text-5xl tracking-tight mb-4 dark:text-white">Ritik Sharma</h2>
				<p className="text-2xl text-gray-600 dark:text-gray-400">
					Software Developer at PropertyPistol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					{/* , experienced in React.js, Next.js, React-native, Flutter, Google */}
				</p>
			</div>
		</>
	);
}
