const Divider = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
    );
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
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">
            Timeline
        </h1>
        <Year>2020</Year>
        <ul>
            <Step title="Loan Application">
                Developed loan application for the Maleshiya client. Front-end in React-Native
                and Back-end in node.js and firbase, MySql from Google Cloud Platform 
            </Step>
            <Step title="Moonlight and Sunshine">
                Server rendered Blogging website for personal use. 
                Developed using Next.js, React.js and database in MySql. 
            </Step>
            <Step title="CogAn-Friend">
                Developed depression anlysis android/ios application while internship in Cambridge University.
                Front-end in React-Native Back-end involved deploying ML multiclass depression servity prediction model in Kubernates Cloud Machine.//edits
            </Step>
            <Step title="More projects to be added by shivani shimpi">
                //edits
            </Step>
        </ul>
        <Divider />
        <Year>2019</Year>
        <ul>
            <Step title="More Edits">
            //edits
            </Step>
        </ul>
    </div>
  )
}
