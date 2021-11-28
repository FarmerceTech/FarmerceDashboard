import MetaLayout from '../components/MetaLayout'
import { login } from '../helpers/login_helper'
import LoadingDialog from '../components/dialog/LoadingDialog'
import { useState } from 'react'
import CustomDialog from '../components/dialog/CustomDialog'
import { useRouter } from 'next/dist/client/router'


export default function Login() {
    const [loadingDialog, setLoadingDialog] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
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
                pathname: router?.query?.redirect ? router?.query?.redirect : '/nurseries',
            })
        }
        setLoadingDialog(false)
    }
    return (
        <>
            <MetaLayout title="Login" description="Admin Dashboard Login" />
            <div className="min-h-full bg-green-100">
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
                                            <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none rounded-l-full bg-gray-200 m-px"
                                            >
                                                <span className="text-gray-500 sm:text-sm">+91</span>
                                            </div>
                                            <input type="text" placeholder="9999999999"
                                                maxLength="10"
                                                id="tel"
                                                name="tel"
                                                type="tel"
                                                autoComplete="tel"
                                                className="rounded-full bg-gray-100 px-4 py-2 pl-16 text-sm w-full outline-none border focus:border-green-700 duration-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="px-6">
                                        <input type="text" placeholder="Password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="rounded-full bg-gray-100 px-4 py-2 text-sm w-full outline-none border focus:border-green-700 duration-500"
                                        />
                                    </div>

                                </div>
                                <button className="w-full text-green-900 hover:bg-green-100 font-bold text-xl bg-green-50 p-4 text-center rounded-b-2xl duration-500">
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
