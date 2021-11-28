import MetaLayout from '../components/MetaLayout'
import { login } from '../helpers/login_helper'
import LoadingDialog from '../components/dialog/LoadingDialog'
import { useState } from 'react'
import CustomDialog from '../components/dialog/CustomDialog'


export default function Login() {
    const [loadingDialog, setLoadingDialog] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const [dialogDescription, setDialogDescription] = useState('')
    const submit = async event => {
        event.preventDefault()
        setLoadingDialog(true)
        const response = await login(event.target.tel.value, event.target.password.value)
        console.log(response);
        if (response.status != null) {
            setDialogTitle('Login Failed')
            setDialogDescription(response.message)
            setShowDialog(true)
        }
        setLoadingDialog(false)
    }
    return (
        <>
            <MetaLayout title="Login" description="Admin Dashboard Login" />
            <div className="min-h-full">
                <div className="py-10 h-screen">
                    <main>
                        <div className="max-w-lg mx-auto sm:px-6 lg:px-8">
                            <form onSubmit={submit} className="space-y-4 divide-y divide-gray-200 p-8 bg-white shadow-2xl rounded-2xl">

                                <div className="space-y-8  sm:space-y-5">
                                    <div
                                        className="text-2xl text-center font-bold"
                                    >
                                        ADMIN LOGIN
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            id="tel"
                                            name="tel"
                                            type="tel"
                                            autoComplete="tel"
                                            className="py-2 px-4 rounded-full block max-w-lg w-full shadow-sm sm:text-sm border-gray-300"
                                        />
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="py-2 px-4 rounded-full block max-w-lg w-full shadow-sm sm:text-sm border-gray-300"
                                        />
                                    </div>

                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="text-center text-white font-bold text-xl bg-blue-700 hover:bg-blue-800 hover:shadow-lg py-2 px-4 rounded-full block max-w-lg w-full shadow-sm sm:text-sm border-gray-300 duration-500 cursor-pointer"
                                    >
                                        LOGIN
                                    </button>
                                </div>
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
