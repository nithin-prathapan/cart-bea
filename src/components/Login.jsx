import React from 'react'
import ReactTyped from 'react-typed'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/userSlice'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (password.length !== 0 || email.length !== 0) {

            // signInWithEmailAndPassword(auth, email, password)
            //     .then((res) => {
            //         console.log(res)
            //         dispatch(userLogin())
            //         navigate('/')
            //     }).catch((error) => {
            //         console.log(error);
            //         alert('Please check your login credentials')
            //         navigate('/login')
            //     })
        }

    }
    return (
        <div className='h-full w-full mt-6 py-3 m-2 justify-center items-center mx-auto px-4'>
            <h1 className="text-[#fee] text-3xl text-center justify-center items-center">Welcome To Cart-Bae</h1>
            <p className='text-green-400 font-semibold uppercase text-center my-2'>Lorem amet consectetur ? <span>
                <ReactTyped
                    className="tracking-[6px]  text-gray-300 duration-600 ease-in-out"
                    strings={['Official']}
                    typeSpeed={80}
                    backSpeed={70}
                    loop={true}

                ></ReactTyped>
            </span>
            </p>
            <p className='text-[#f1f1f1] font-semibold uppercase text-xs text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad!</p>
            <h1 className='text-[#fee] m-4 p-5 text-3xl  text-center justify-center items-center'>
                <ReactTyped
                    className="tracking-[6px]  text-gray-300 duration-600 ease-in-out"
                    strings={['Login Here']}
                    typeSpeed={80}
                    backSpeed={70}
                    loop={true}


                ></ReactTyped>
            </h1>
            <form onSubmit={(e) => handleLogin(e)} className='m-4 justify-center items-center'>
                <input onChange={(e) => setEmail(e.target.value)} required className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md outline-none' type="text" name="email-input" id="" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} required className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md outline-none' type="password" name="" id="" placeholder='Password' />
                <button type='submit' onClick={handleLogin} className='block justify-center items-center mx-auto bg-red-500 text-center rounded-lg w-[300px] h-8 m-4 text-[#000] hover:font-medium hover:scale-105 duration-300 ease-in-out '>Login</button>
            </form>
            <p className='text-[#f1f1f1] mx-auto font-semibold  text-xs text-center mb-6 mt-6 max-w-[305px]'>Don't have an account? click below to create a new one</p>
            <Link to='/signin'><h4 className='text-[#f1f1f1] max-w-[300px] mx-auto font-semibold uppercase text-xs text-center mb-6 mt-6 bg-[#eeeeff5d] rounded-md p-2 cursor-pointer '>Create a new account</h4>
            </Link>
        </div>)
}

export default Login