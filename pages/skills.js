import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { useRouter } from 'next/router'

const title = 'Skills - Ritik Sharma';
const description = 'Full Stack Engineer';

export default function Skills() {
	const [Lang, setLang]=useState(0)
	const [Fram, setFram]=useState(0)
	const [Soft, setSoft]=useState(0)
	const router = useRouter()

	if(Lang===3 && Fram===3 & Soft===3){
		console.log('Activating Login')
		router.push('./userLogin/login')
	}
	
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
					<b onClick={()=> setLang(Lang+1)}>LANGUAGES: </b>
					Python, Bash, Java, JavaScript, TypeScript, CSS3, SASS, C/C++, PHP
					<br />
					<b onClick={()=> setFram(Fram+1)}>FRAMEWORKS: </b>
					React, Next.js, React Native, TensorFlow, Keras
					<br />
					<b onClick={()=> setSoft(Soft+1)}>SOFTWARES: </b>
					Visual Studio Code, Android Studio, Tableau, Weka
					<br />
					<b>DOMAIN: </b>
					Mobile App Development, Website Development, Machine Learning, Deep Learning, Computer Vision
					<br />
					<b>CLOUD: </b>
					Google Cloud Platform, Amazon Web Services
					<br />
					<b>TOOLS: </b>
					Node.js, MongoDB, Git, GitHub, LATEX
				</h2>
			</div>
		</>
	);
}
