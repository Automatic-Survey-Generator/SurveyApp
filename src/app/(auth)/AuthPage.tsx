'use client'

import ResponsiveContainer from '@/components/ui/ResponsiveContainer'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AuthButton = ({
    provider,
    callbackUrl,
    imageUrl,
    altText,
    buttonText,
    onClick
}) => (
    <button
        type="button"
        onClick={onClick}
        className="flex gap-5 px-2 py-[12px] font-semibold rounded-md shadow-md border-t-gray-50 border-[1px] mb-4 w-full justify-center items-center transition-shadow duration-300 hover:shadow-lg"
    >
        <Image src={imageUrl} width="20" height="20" alt={altText} />
        {buttonText}
    </button>
)

export default function AuthPage({ isLoginPage }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
const router = useRouter()
    const handleAuth = async (event) => {
        event.preventDefault()
        if (!isLoginPage && password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        if (isLoginPage) {
            signIn('credentials', { email, password, callbackUrl: '/dashboard' })
        } else {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json();
            if (data.success) {
                router.push('/login')
            }
        }
    }

    const socialAuth = (provider) => {
        signIn(provider, { callbackUrl: '/dashboard' })
    }

    return (
        <section className="flex flex-col items-center min-h-screen relative">
            <ResponsiveContainer className="relative z-10 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl jacques-francois-shadow-regular mb-8 text-center">
                Sign <span className='text-orange-400'>{isLoginPage ? 'In' : 'Up'}</span>
                </h2>

                <form
                    className="bg-white w-full p-8 shadow-md border-[1px] border-gray-300 rounded-3xl"
                    onSubmit={handleAuth}
                >
                    <div>
                        <AuthButton
                            provider="google"
                            callbackUrl="/dashboard"
                            imageUrl="/assets/google.svg"
                            altText="google"
                            buttonText={`Continue with Google`}
                            onClick={(e) => socialAuth('google')}
                        />
                        <AuthButton
                            provider="github"
                            callbackUrl="/dashboard"
                            imageUrl="/assets/github.svg"
                            altText="github"
                            buttonText={`Continue with GitHub`}
                            onClick={() => socialAuth('github')}
                        />
                    </div>
                    <div className="flex items-center w-full mb-5">
                        <div className="line h-[2px] bg-gray-400 w-[20%] sm:w-[25%] md:w-[30%] lg:w-[35%]"></div>
                        <p className="flex-1 text-center text-gray-500 font-semibold italic">
                            or continue with
                        </p>
                        <div className="line h-[2px] bg-gray-400 w-[20%] sm:w-[25%] md:w-[30%] lg:w-[35%]"></div>
                    </div>
                    <div className="form-control mb-5">
                        <label
                            htmlFor="email"
                            className="font-semibold text-gray-600 inline-block mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-2 py-[12px] rounded-md border-[1px] border-gray-300 outline-none focus:border-orange-400 focus:shadow-md transition-shadow duration-300"
                        />
                    </div>
                    <div className="form-control mb-5">
                        <label
                            htmlFor="password"
                            className="font-semibold text-gray-600 inline-block mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-2 py-[12px] rounded-md border-[1px] border-gray-300 outline-none focus:border-orange-400 focus:shadow-md transition-shadow duration-300"
                        />
                    </div>
                    {!isLoginPage && (
                        <div className="form-control mb-5">
                            <label
                                htmlFor="confirmPassword"
                                className="font-semibold text-gray-600 inline-block mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-2 py-[12px] rounded-md border-[1px] border-gray-300 outline-none focus:border-orange-400 focus:shadow-md transition-shadow duration-300"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="bg-orange-400 hover:bg-orange-500 px-2 py-[12px] text-black w-full rounded-md font-semibold"
                    >
                        {isLoginPage ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <Link
                    href={isLoginPage ? '/signup' : '/login'}
                    className="text-center inline-block w-full my-2"
                >
                    {isLoginPage
                        ? "Don't have an account? "
                        : 'Already have an account? '}
                    <span className="text-orange-400 underline">
                        {isLoginPage ? 'Sign up' : 'Sign in'}
                    </span>
                </Link>
            </ResponsiveContainer>
        </section>
    )
}
