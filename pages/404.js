import { NextSeo } from 'next-seo';
import Link from 'next/link';

const title = 'Error - 404';
const description = 'Unavailable';

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
export default function Error() {
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
				<h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
					Uh Oh!
				</h1>
				<br />
				<p className="text-2xl text-gray-600 dark:text-gray-400">The page is Unavailable</p> <br />
				<p className="text-gray-600 dark:text-gray-400 mb-8">
					It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you
					spelled something wrong. Can you double check that URL?
				</p>
			</div>
			<div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
				<p className="text-gray-600 dark:text-gray-400 mb-8">Want to go back?</p>
				<Link href="/">
					<a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
						Return Home
					</a>
				</Link>
			</div>
		</>
	);
}
