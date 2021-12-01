import MetaLayout from '../components/MetaLayout'
import { login } from '../helpers/login_helper'
import LoadingDialog from '../components/dialog/LoadingDialog'
import { useState } from 'react'
import CustomDialog from '../components/dialog/CustomDialog'
import { useRouter } from 'next/dist/client/router'


export default function Login() {
    const [loadingDialog, setLoadingDialog] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const router = useRouter()
    const [dialogDescription, setDialogDescription] = useState('')
    const submit = async event => {
        event.preventDefault()
        setLoadingDialog(true)
        const response = await login(event.target.tel.value, event.target.password.value)
        console.log(response.status);
        if (response.status != 200) {
            setDialogTitle('Login Failed')
            setDialogDescription(response.message)
            setShowDialog(true)
        } else {
            router.push({
                pathname: router?.query?.redirect ? router?.query?.redirect : '/nursery',
            })
        }
        setLoadingDialog(false)
    }
    return (
        <>
            <MetaLayout title="Login" description="Admin Dashboard Login" />
            <div className="min-h-full bg-gradient-to-r from-fgreen-500">
                <div className="py-10 h-screen">
                    <main>
                        <div className="max-w-lg mx-auto px-4">
                            <div className="">
                                <img className="w-32 rounded-full ml-auto mr-auto" src="/img/logo.png" />
                            </div>
                            <form onSubmit={submit} className="-mt-16 space-y-4 divide-y-2 divide-green-700 bg-white shadow-2xl rounded-2xl">

                                <div className="pt-16 space-y-8  sm:space-y-5">
                                    <div
                                        className="pt-4 text-2xl text-center font-bold text-green-900"
                                    >
                                        ADMIN LOGIN
                                    </div>
                                    <div className="px-6">
                                        <div className="relative" >
                                            <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none rounded-l-full bg-fgreen-700 m-px"
                                            >
                                                <span className="text-white sm:text-sm">+91</span>
                                            </div>
                                            <input type="text" placeholder="9999999999"
                                                maxLength="10"
                                                id="tel"
                                                name="tel"
                                                type="tel"
                                                autoComplete="tel"
                                                className="rounded-full bg-gray-100 px-4 py-2 pl-16 text-sm w-full outline-none border focus:border-fgreen-700 duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6">
                                        <div className="relative " >
                                            <input placeholder="Password"
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="rounded-full bg-gray-100 px-4 py-2 pr-14 text-sm w-full outline-none border focus:border-fgreen-700 duration-500"
                                            />
                                            <div className="cursor-pointer absolute inset-y-0 right-0 pl-3 pr-3 flex items-center  m-px text-gray-400 hover:text-fgreen-700 duration-500"
                                                onClick={() => {
                                                    setShowPassword(!showPassword)
                                                }}>
                                                {
                                                    showPassword ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" /></svg>
                                                        : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <button className="w-full text-green-900 hover:bg-green-100 active:bg-green-200 font-bold text-xl bg-green-50 p-4 text-center rounded-b-2xl duration-500">
                                    LOGIN
                                </button>


                                {/* <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="text-center text-white font-bold text-xl bg-blue-700 hover:bg-blue-800 hover:shadow-lg py-2 px-4 rounded-full block max-w-lg w-full shadow-sm sm:text-sm border-gray-300 duration-500 cursor-pointer"
                                    >
                                        LOGIN
                                    </button>
                                </div> */}
                            </form>
                        </div>
                    </main>
                </div>
            </div >
            <LoadingDialog showDialog={loadingDialog} setShowDialog={setLoadingDialog} />

            <CustomDialog showDialog={showDialog} setShowDialog={setShowDialog} title={dialogTitle} description={dialogDescription} />
        </>
    )
}
