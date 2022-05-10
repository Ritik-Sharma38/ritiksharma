import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const title = 'Ritik Sharma';
const description = "Ritik Sharma's projects";

export default function WebApps({project}) {
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
				{project === 'exam' && (
					<ProjectCard
					title="Online Exam Proctoring System"
					description="A web application that allows students to take exams online and proctor the exams. The system is build on top of below Audio/Video Meeting Platform. The system uses tensflow.js, BlazeFace for face detection, MobileNet for cheating object recognition like Books, Mobiles, etc. It generates events for malpractice detection and inform host of the meeting."
					href=""
					// icon="nextjs"
				/>
				)}	
				{project === 'nextweb' && (
					<ProjectCard
					title="Performance testing using Server-side-rendering"
					description="Developed and deployed a server-side rendered blog website using Next.js with Prisma and MySQL integration. Tested the website’s server response and performance in contrast to static, universal, and client-side rendered websites based on server-response time, DOM loading and processing, speed
                    ̈ index, time to first byte, and final interactive time"
					href="https://wdl-blog.vercel.app/"
					// icon="nextjs"
				/>
				)}
				{project === 'meet' && (
					<ProjectCard
					title="Audio/Video Meeting Platform with Agora"
					description="Developed and deployed a WebRtc Meeting Platform where users can have group audio calls, video calls & Screen share with extended functionalities like chat, file sharing, auto attendance and more. The platform is built on Agora’s WebRtc SDK and is deployed on vercel. The backend is built on FastAPI with Sockets.io and deployed on Kubernetes from Digital Ocean."
					href=""
					// icon="nextjs"
				/>
				)}
				{project === 'class' && (
					<ProjectCard
					title="Classrooms, Exams, Timetable & Attendance"
					description="Developed and deployed a web application that allows teachers to create classrooms, exams, timetable and attendance, helps students join classroom, take exams, check timetable and attendance, and more. The application is built on React.js and Next.js and deployed on Vercel. The backend in build in FastAPI and deployed on Kubernetes from Digital Oceans."
					href=""
					// icon="nextjs"
				/>
				)}
				
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
