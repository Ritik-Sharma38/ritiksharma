import Error from '../404'
import { useState } from 'react'
import { Input } from 'reactstrap'
import Link from 'next/link';

export default function Login() {

   const [LoginState, setLoginState]=useState(true)

	return (
		<>  
            {!LoginState && (
                <Error/>
            )}
            {LoginState && (
                <div className="flex flex-col justify-center items-start max-w-1xl mx-auto mb-16">
                    <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-8 dark:text-white">
                        Login
                    </h2>    
                    <Input
                        className="text-xl text-gray-600 bg-white mb-4 dark:text-gray-400 dark:bg-black"
                        placeholder="Email"
                        type="email"
                        >
                    </Input>    
                    <Input
                        className="text-xl text-gray-600 bg-white mb-4 dark:text-gray-400 dark:bg-black"
                        placeholder="Password"
                        type="password"
                        >
                    </Input> 
                    <Link href="/">
                        <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
                            Go
                        </a>
                    </Link>  
                </div>
            )}
		</>
	);
}
