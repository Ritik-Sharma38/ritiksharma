const Divider = () => {
	return <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />;
};

const Year = ({ children }) => {
	return (
		<h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
			{children}
		</h3>
	);
};

const Step = ({ title, children }) => {
	return (
		<li className="mb-4 ml-2">
			<div className="flex items-center mb-2 text-green-700 dark:text-green-300">
				<span className="sr-only">Check</span>
				<svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
					<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
						<path d="M22 4L12 14.01l-3-3" />
					</g>
				</svg>
				<p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
			</div>
			<p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
		</li>
	);
};

export default function Timeline() {
	return (
		<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
			{/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">
            Timeline
        </h1> */}
			<Year>2020</Year>
			<ul>
				<Step title="Website Development contract from NGB Living">
					{/* <i>
						<b>Full Stack Development</b>
					</i>
					<br /> */}
					Impressed by the results, the same German Company I formerly worked with as a Machine Learning
					Intern offered a full contract for website development and enhancement.
				</Step>
				<Step title="Got my first freelance project">
					Worked with a Malaysian client on a cross-platform mobile application using React Native. Finished
					the project with satisfactory results in 15 days.
				</Step>
				<Step title="Landed an internship at a German Company">
					<i>
						<b>Machine Learning Intern</b>
					</i>
					<br />
					Designed and deployed an interactive chat assistant using machine learning to automate the existing
					process for addressing customer queries about the company services.
				</Step>
				<Step title="Started working at University of Cambridge">
					<i>
						<b>Development Intern</b>
					</i>
					<br />
					Finished three projects simultaneously and successfully developed three cross-platform applications
					using React-Native, and Flutter.
					<br />
					Managed the Application development and Cloud team to deploy the software for clinical trials in
					parallel collaboration with the Machine Learning team.
				</Step>
			</ul>
			<Divider />
			<Year>2019</Year>
			<ul>
				<Step title="First Internship at iPing Data Labs">
					<i>
						<b>Machine Learning & Computer Vision Intern</b>
					</i>
					<br />
					Automated quality assurance for industry workers while ensuring safety paraphernalia and smooth
					execution of industrial processes using Computer Vision.
				</Step>
				<Step title="Elected as a technical advisor at the Association of Computer Engineering Students">
					Established a competitive programming environment in the college, organised Hackathons and Webathons
					over 24-hours, created problems for the hackathon. Organized events and workshops based on tools and
					technologies like C, C++, Python, Java, R, Swift, PHP, and NetBeans, depending upong the students’
					profile and requirements. Managed and organized technical festivals related to College and
					Department.
				</Step>
			</ul>
		</div>
	);
}
