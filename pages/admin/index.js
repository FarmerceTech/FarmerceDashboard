import cookies from "next-cookies";
import Link from 'next/link'
import moment from 'moment'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    HomeIcon,
    XIcon,
    MenuAlt2Icon
} from '@heroicons/react/outline'
import { useRouter } from "next/dist/client/router";
import MetaLayout from "../../components/MetaLayout";
import NavigationLayout from "../../components/NavigationLayout";

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

export default function Nursery({ admins, totalPages, size, totalItems, pageNumber, user }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()

    return (
        <>

            <MetaLayout title="Nursery List" description={"Page Number " + pageNumber} />
            <div>
                <NavigationLayout index="3" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
                                            {/* <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            /> */}
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
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Admin List</h1>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className="flex flex-col">
                                    <div className="mt-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                ID
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                First Name
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                Last Name
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                Phone Number
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                Last Active
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                Onboarding Date
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {
                                                            admins.map(admin => (
                                                                <tr key={admin.uId} className="cursor-pointer hover:bg-gray-200 duration-500" onClick={() => {
                                                                    router.push({
                                                                        pathname: '/admin/' + admin.uId,
                                                                    })
                                                                }}>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.uId}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{admin.firstName}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{admin.lastName}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{'+91 ' + admin.phoneNumber}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(admin.lastActive).format('hh:mm A, DD MMM YYYY')}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(admin.creationDate).format('DD MMM YYYY')}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    {
                                        (parseInt(pageNumber) - 1) >= 1 ?
                                            <Link href={{
                                                pathname: '/admin',
                                                query: {
                                                    page: (parseInt(pageNumber) - 1),
                                                }
                                            }}>
                                                <a>
                                                    <div
                                                        className="p-2 bg-black bg-opacity-10 hover:bg-opacity-25 rounded-full duration-500 cursor-pointer text-fgreen-700"

                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" /></svg>
                                                    </div>
                                                </a>
                                            </Link> : <></>
                                    }
                                    <div className="self-center">
                                        {pageNumber + ' of ' + totalPages}
                                    </div>
                                    {
                                        (parseInt(pageNumber) + 1) <= totalPages ?
                                            <Link href={{
                                                pathname: '/admin',
                                                query: {
                                                    page: (parseInt(pageNumber) + 1),
                                                }
                                            }}>
                                                <a>
                                                    <div className="p-2 bg-fgreen-900 bg-opacity-10 hover:bg-opacity-25 rounded-full duration-500 cursor-pointer text-fgreen-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
                                                    </div>
                                                </a>
                                            </Link> : <></>
                                    }
                                    {/* <div className="p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full duration-500 cursor-pointer text-indigo-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
                                    </div> */}
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
    const pageNumber = context.query.page ? context.query.page : 1;
    console.log(pageNumber)
    if (access_token == null || access_token == '') {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    console.log(access_token);
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
    const response = await fetch('https://api.farmerce.in/admin/nurseryAdmin?sort=creationDate,Desc&page=' + (pageNumber - 1), {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });
    if (response.status == 200) {
        const responseJson = await response.json()
        const admins = responseJson._embedded != null ? responseJson._embedded.userResourceList : [];
        const totalPages = responseJson.page != null ? responseJson.page.totalPages : 0
        const size = responseJson.page != null ? responseJson.page.size : 0
        const totalItems = responseJson.page != null ? responseJson.page.totalElements : 0
        console.log(pageNumber + ' ' + totalPages)
        return {
            props: {
                admins, totalPages, size, totalItems, pageNumber, user
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