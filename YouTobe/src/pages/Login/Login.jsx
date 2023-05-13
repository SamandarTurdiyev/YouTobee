import { Link } from "react-router-dom";
import {AiFillYoutube} from "react-icons/ai";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";


import {MdOutlineDarkMode} from "react-icons/md"
import {BiShow} from "react-icons/bi"

const Login = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error,setError] = useState('')

    const [dark,setDark] = useState(false)

  const theme = {
    backgroundColor: dark ? 'white' : "#1F2022" ,
    color: dark ? '#19202C' : 'white',
  }

    const handleLogin = async(e) => {
        e.preventDefault();

        if (!email && !password) {
            setError('please fill all the fild')
            return
        }
      

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            if(error.code ==='auth/user-not-found'){
                setError('user topilmadi')
            } else if (error.code === 'auth/wrong-password') {
                setError('parol togri kelmadi')
            } else {
                setError(error.message)
            }

        }
        form.reset();
       
    }

    const toggleShowPassword = () => {

        setShowPassword(!showPassword)
    }
    
  return (
    <>
    <section style={theme} className="bg-gray-50 dark:bg-gray-900">
  <div style={theme} className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
    
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold  dark:text-white-700">
          <AiFillYoutube className='text-red-700'/>
         Login 
      </a>
      <button  onClick={() => setDark(prevdark => !prevdark)} ><MdOutlineDarkMode/></button>

      <div style={theme} className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form  className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                      <input style={theme} type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                     <div className="relative">
                     <input style={theme} type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password" id="password" placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                     <button type="button" onClick={toggleShowPassword} className="absolute top-3 right-2"> <BiShow/></button>
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login