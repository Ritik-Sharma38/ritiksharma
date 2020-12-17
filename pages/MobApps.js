import { NextSeo } from 'next-seo';
import ProjectCard from '../components/ProjectCard';

const title = 'Ritik Sharma';
const description = 'Full Stack Engineer';

export default function MobApps() {
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
			<div className="flex flex-col justify-center items-start max-w-2xl">
				<ProjectCard
					title="CogAn-Friend"
					description="Developed a cross-platform smartphone application using React-Native, Redux, and Node Package Manager (NPM). Used over 20 JavaScript packages necessary for the User Interface (UI) components, Firebase, and Firestore services. Structured the back-end using GCP for authentication, and back-end management of user services. Used Cloud Firestore for user data storage using its client library for Python v3.7 and Node.js for database interactions. One database was dedicated to the user profiles of the patients and doctors while the other database comprised only of the results."
					href="https://github.com/Ritik-Sharma38/CongAn-Friend"
					// icon="react2025"
				/>
			</div>
		</>
	);
}
