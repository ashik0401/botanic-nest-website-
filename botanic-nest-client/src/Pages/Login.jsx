import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';



import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../../firebase.init';
import '../App.css'
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { logIn, googleSignIn, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const emailRef = useRef();



    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;





        logIn(email, password)
            .then(() => {
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(() => {
                setError('Enter valid Password')
                toast.error('Enter valid Password ')
                setLoading(false);
            });
    }
    const handleForgetPass = () => {
        const email = emailRef.current.value;

        if (!email) {
            setError('Please enter your email first');
            return;
        }

        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('A password reset email has been sent. Please check your inbox.');
            })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message);
            });
    }


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch((error) => {
                setError(error.message)
            });
    }




    return (
        <div className="hero pt-40   px-10">
            <div className="card  responsive-login  w-full md:max-w-sm shadow-2xl 
            
            ">
                <div className="card-body ">
                    <form
                        onSubmit={handleLogIn}
                        className="md:space-y-4">
                        <h2 className="md:text-2xl text-lg font-semibold text-center text-[#8BC34A]">Login to your account</h2>

                        <div>
                            <label className="label md:text-lg">Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                className="input input-bordered w-full focus:outline-none"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <span className='label md:text-lg'>Password</span>
                            <label className="input focus-within:outline-none w-full">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    autoComplete="password"
                                    required
                                    placeholder="Password"
                                    className="focus:outline-none w-full"
                                />
                                <p onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </p>
                            </label>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                        </div>
                        <div
                            onClick={handleForgetPass}
                        >
                            <a className="link link-hover text-primary">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="btn bg-[#689F38] hover:bg-[#558B2F] w-full mt-2 ">
                            Login
                        </button>

                        <p className="text-center text-sm ">
                            Don’t have an account?
                            <Link to="/register">
                                <span className="ml-1 text-[#558B2F]  hover:underline font-semibold">Register</span>
                            </Link>
                        </p>

                    </form>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn w-full  border-[#e5e5e5] mt-4"
                    >
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        <span className="ml-2 text-base-content">Login with Google</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;