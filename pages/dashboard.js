import cookies from "next-cookies";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    HomeIcon,
    XIcon,
    MenuAlt2Icon,
    ArrowSmUpIcon,
    ArrowSmDownIcon
} from '@heroicons/react/outline'
import { useRouter } from "next/dist/client/router";
import MetaLayout from "../components/MetaLayout";
import NavigationLayout from "../components/NavigationLayout";

const navigation = [
    { name: 'Nursery List', href: '/nursery', icon: HomeIcon, current: false },
    { name: 'Admin List', href: '/admin', icon: HomeIcon, current: true },
]
const userNavigation = [
    { name: 'Logout', href: 'login' },
]
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    // More people...
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const stats = [
    { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
    { name: 'Total Invoices', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
    { name: 'Total Pending Advance Slip', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
    { name: 'Total Pending Advance Slip', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
export default function Nursery({ dashboard, user }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()

    return (
        <>
            <MetaLayout title="Dashboard" description={"Dashboard"} />
            <div>
                <NavigationLayout index="1" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">

                            </div>
                            <div className="ml-4 flex items-center md:ml-6">

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-white rounded-full flex text-sm border border-fgreen-100 hover:bg-fgreen-100 focus:bg-fgreen-100 active:bg-fgreen-100 duration-500 p-1">
                                            <span className="sr-only">Open user menu</span>
                                            <svg className="text-fgreen-800" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                                            <div className="self-center px-2 text-fgreen-800 font-semibold">
                                                {user.firstName + ' ' + user.lastName}
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 self-center mr-2 text-fgreen-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main>
                        <div className="py-6">
                            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Nursery List</h1>
                            </div> */}
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div>

                                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <div
                                            key="Total Nurseries"
                                            className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt className="text-base font-normal text-gray-900">Total Nurseries</dt>
                                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                                    {dashboard.nurseryCount}
                                                </div>
                                                {
                                                    dashboard.nurseriesAddedToday > 0 ?
                                                        <div
                                                            className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-green-100 text-green-800'>
                                                            <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" /></svg>
                                                            <span className="sr-only">Increased by</span>
                                                            {dashboard.nurseriesAddedToday}
                                                        </div> : <></>
                                                }

                                            </dd>
                                        </div>
                                        <div
                                            key="Total Nursery Owners"
                                            className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt className="text-base font-normal text-gray-900">Total Nursery Owners</dt>
                                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                                    {dashboard.ownersCount}
                                                </div>
                                                {
                                                    dashboard.ownersAddedToday > 0 ?
                                                        <div
                                                            className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-green-100 text-green-800'>
                                                            <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" /></svg>
                                                            <span className="sr-only">Increased by</span>
                                                            {dashboard.ownersAddedToday}
                                                        </div> : <></>
                                                }

                                            </dd>
                                        </div>
                                        <div
                                            key="Total Active Owners"
                                            className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt className="text-base font-normal text-gray-900">Total Active Owners</dt>
                                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                                    {dashboard.todayActiveOwners}
                                                </div>
                                            </dd>
                                        </div>
                                        <div
                                            key="Invoices"
                                            className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt className="text-base font-normal text-gray-900">Invoices</dt>
                                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                                    {dashboard.completeInvoiceCount}
                                                </div>
                                                {dashboard.todaysCompletedInvoicesCount > 0 ?
                                                    <div
                                                        className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-green-100 text-green-800'>
                                                        <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" /></svg>
                                                        <span className="sr-only">Increased by</span>
                                                        {dashboard.todaysCompletedInvoicesCount}
                                                    </div> : <></>
                                                }

                                            </dd>
                                        </div>
                                        <div
                                            key="Advance Slip"
                                            className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt className="text-base font-normal text-gray-900">Advance Slip</dt>
                                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                                    {dashboard.pendingAdvanceSlipCount}
                                                </div>
                                                {
                                                    dashboard.todaysPendingAdvanceSlipCount > 0 ?
                                                        <div
                                                            className='inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-green-100 text-green-800'>
                                                            <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" /></svg>
                                                            <span className="sr-only">Increased by</span>
                                                            {dashboard.todaysPendingAdvanceSlipCount}
                                                        </div> : <></>
                                                }

                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const { access_token } = cookies(context)
    if (access_token == null || access_token == '') {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    const fetch = require('node-fetch');
    const userResponse = await fetch('https://api.farmerce.in/user', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });
    let user;
    if (userResponse.status == 200) {
        const userResponseJson = await userResponse.json()
        console.log(userResponseJson)
        user = userResponseJson
    }
    const response = await fetch('https://api.farmerce.in/admin/dashboard', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });
    if (response.status == 200) {
        const dashboard = await response.json()

        console.log(dashboard)
        return {
            props: {
                dashboard, user
            }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }

}