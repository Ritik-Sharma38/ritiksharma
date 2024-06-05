import { NextSeo } from "next-seo"

const url = 'https://ritikdsharma.vercel.app/';
const title = 'Experience - Ritik Sharma';
const description = 'CTO';

const Experience = () => {

    const bc = [
        {
            "head": "Software Developer",
            "text": "Working on developing projects aimed at automating performance assessment and streamlining the employee performance review (PRF) process. Additionally, I have led the development of a project focused on efficiently managing employee allocation across various projects."
        },
        {
            "head": "TechStack",
            "text": "React.js, Next.js, TypeScript, Node.js, Python - FastApi, Azure functions"
        },
    ]

    const pps = [
        {
            "head": "Software Development",
            "text": "Working on developing two react native apps and services consisting different transitions, displaying different visuals of property and multiple details. Apps developed by React Native CLI for Android and iOS."
        },
        {
            "head": "Developed Modules",
            "text": "Projects, Home loan, Property View, Passbooks, Enquiries, Drawing Canvas."
        },
        {
            "head": "Libraries",
            "text": "Redux Saga/Thunk, Native base, React Navigation, Firebase."
        },
        {
            "head": "TechStack",
            "text": "React.js, React Native, Angular, TypeScript, JavaScript, Node.js, Python - FastApi, MongoDB, Redis, Jira/Redmine."
        },
    ]

    const cto = [
        {
            "head": "Cross-team Development Management",
            "text": "Managed cross-team development, setup workflows and pipelines,documentations and technology operation procedures across the teams."
        },
        {
            "head": "Developed Modules",
            "text": "Examination Portal, Classrooms, Timeline, Attendance, and Videoconferencing with Whiteboard."
        },
        {
            "head": "DevOps Pipeline",
            "text": "Setup an efficient DevOps pipeline across the system with SOPs for testing, staging, and production environments."
        },
        {
            "head": "Automatic Unit Testing",
            "text": "Set up automatic unit testing, bug reporting and bug solving pipeline, and testing evaluation procedures using Jira."
        },
        {
            "head": "Production Facilitation",
            "text": "Facilitated production of the entire system, auto-scaling of clusters, horizontal scaling of pods, and load balancers."
        },
        {
            "head": "Deployment & Monitoring",
            "text": "Wrote deployment procedures and testing scripts and monitored kubernetes pods and deployments, setting alerts for reporting any service issues."
        }
    ]

    const tl = [
        {
            "head": "Development",
            "text": " Developed Examination Portal, Classrooms, Timeline, Video Conferencing with Whiteboard."
        },
        {
            "head": "CI/CD Pipeline",
            "text": " Managed CI/CD pipeline deployment and management of frontend, backend, cloud services, and third-party services, and deployments through Docker and Kubernetes on Digital Ocean."
        },
        {
            "head": "Feature Control",
            "text": "Setup role and permission based engines for feature control at different access levels."
        },
        {
            "head": "Videoconferencing",
            "text": "Utilized Agora SDK for videoconferencing and socket.io for real-time communication."
        },
        {
            "head": "TechStack",
            "text": "React.js, React Native, Next.js, Chakra UI, Node.js, Express.js, TypeScript, JavaScript, FastAPI, Redis, MongoDB, Digital Ocean, Kubernetes, Docker, Socket.io, Agora, Jira."
        }
    ]

    const fse= [
        {
            "head": "Software",
            "text": "Working on full software package that consists of 3 native and 3 web-apps build on React Native and React. 3 Backend projects were build in Node.js and deployed over Aws EC2 Instance with auto scaling and Elastic load balancers."
        },
        {
            "head": "Tech Stack",
            "text": "Mongo Express React Node.js & React Native"
        }
    ]

    const rne= [
        {
            "head": "Project",
            "text": "Education app involving courses, assignments, lectures, tests, user profile, attendance, and parent-view."
        },
        {
            "head": "Language",
            "text": "React Native"
        }
    ]

    const ngb = [
        {
            "head": "Project",
            "text": "Designing an interactive chat assistant to automate the existing process for addressing customer queries."
        },
        {
            "head": "Dataset Creation",
            "text": " Dataset was created using FAQs and queries that the company received through emails"
        },
        {
            "head": "Model Creation",
            "text": "Built on TF-IDF vectorizers, GloVe Embeddings, Cosine Similarity, and Query Handler"
        },
        {
            "head": "Model Deployment",
            "text": "Deployed the model on WordPress and Cloud-Run (GCP) server-less platform"
        },
        {
            "head": "Tech Stack",
            "text": "Cloud-Run (GCP), Docker, gcloud-cli, Javascirpt, Python, Flask, git"
        }
    ]

    const iping = [
        {
            "head": "Project",
            "text": "Automating quality assurance for industry workers while ensuring safety paraphernalia and smooth execution of the industrial processes using Computer Vision."
        },
        {
            "head": "Computer Vision",
            "text": "Performed object detection and logging time periods by deploying YOLO-V3 with transfer learning and fine tuning classifications for all layers of the network."
        },
        {
            "head": "Data Creation",
            "text": "Generated the data, scraped and tested for redundancy from the industrial video scenarios using Python v3.7 and Google Colaboratory."
        },
        {
            "head": "Machine Learning",
            "text": "Fine-tuned YOLO-V3 using pre-trained MS-COCO weights, modified for custom dataset."
        }
    ]

    const aces = [
        {
            "head": "Competitive Programming",
            "text": "Created a competitive programming environment in the college by organising several Hackathons and Webathons ranging for over 24-hours. Created CP problems for the hackathons."
        },
        {
            "head": "Technical Workshops",
            "text": "Organized events and workshops based on tools and technologies like C, C++, Python, Java, R, Swift, PHP, and NetBeans, depending upong the students’ profile and requirements."
        },
        {
            "head": "Technical Festivals",
            "text": "Managed and organized technical festivals related to College and Department."
        }
    ]

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h3 className="font-bold text-1xl md:text-3xl tracking-tight mb-4 dark:text-white">
                    Experience
                </h3>
                <br />
                {/* <h2 className="text-1xl text-gray-600 dark:text-gray-400 mb-10">
					Some of my most interesting projects
				</h2>  */}
                {/* <Skills /> */}
                {/* <h2 className="font-bold text-4xl tracking-tight mb-2 dark:text-white">Some of my most intersting projects</h2> */}
                
                <h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Blenheim Chalcot - Software Developer</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {bc.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 className="font-bold text-2xl tracking-tight mb-2 dark:text-white">PropertyPistol - Software Developer</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {pps.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>
                
                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Edvora EdTeach StartUp - Cheif Technology Officer</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {cto.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Edvora - Tech Lead</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {tl.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">GreenBoard - Full Stack Software Developer</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {fse.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">GreenBoard - React Native Developer</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {rne.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">NGB Living - Machine Learning Intern</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {ngb.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">iPing Data Labs - Machine Learning & Computer Vision Intern</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {iping.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>

                <h2 style={{marginTop: "25px"}} className="font-bold text-2xl tracking-tight mb-2 dark:text-white">Association of Computer Engineering Students - Technical Advisor</h2>

                <div style={{paddingLeft: "10px", borderBottom: "1px solid rgba(80, 80, 80, 0.4)"}}>
                    {aces.map((item) => {
                        return (
                            <h3 className="dark:text-gray-300 mb-3">
                                <b>{item.head}</b>: {item.text}
                            </h3>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Experience