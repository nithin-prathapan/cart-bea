import React, { useState } from 'react'
import ReactTyped from 'react-typed'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { userLogin } from '../redux/userSlice'
import { useEffect } from 'react'

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})

  //login with google
  const provider = new GoogleAuthProvider()
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }

  }, [])

  //login with email and password
  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate('/login')
      }).catch((error) => {
        alert(error.message)
        navigate('/signin')
      })

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
          strings={['Sign-UP']}
          typeSpeed={80}
          backSpeed={70}
          loop={true}


        ></ReactTyped>
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className=' m-4 justify-center items-center'>
        <input className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md outline-none' type="text" name="" id="" placeholder='Name' />
        <input onChange={(e) => setEmail(e.target.value)} className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md outline-none' type="text" name="" id="" placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} className='block justify-center items-center mx-auto w-[300px] h-8 m-4 p-1.5 rounded-md outline-none' type="password" name="" id="" placeholder='Password' />
        <button type='submit' onClick={handleSubmit} className='block justify-center items-center mx-auto bg-green-400 text-center rounded-lg w-[300px] h-8 m-4 text-[#000] hover:font-medium hover:scale-105 duration-300 ease-in-out '>Submit</button>
      </form>
      <Link to='/login'><p className='text-[#f1f1f1] mx-auto font-semibold hover:text-blue-400 text-xs text-center mb-6 mt-6 max-w-[300px]'>Already have an account? click here to login</p>
      </Link>
      <h4 onClick={handleGoogleLogin} className='text-[#f1f1f1] max-w-[300px] mx-auto font-semibold uppercase text-xs text-center mb-6 mt-6 bg-[#eeeeff5d] rounded-md p-2 cursor-pointer '>Sign In With Google <FcGoogle size={20} className='inline ml-1 my-auto bg-[#ffeeee] mx-auto rounded-full' /></h4>

    </div>
  )
}

export default Signin
