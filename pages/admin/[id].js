import cookies from "next-cookies";
import Link from 'next/link'
import { NextScript } from "next/document";
import moment from 'moment'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    HomeIcon,
    LibraryIcon,
    XIcon,
    UsersIcon,
    MenuAlt2Icon,
    PaperClipIcon,
    ChevronRightIcon,
    CheckCircleIcon,
    MailIcon
} from '@heroicons/react/outline'
import { useRouter } from "next/dist/client/router";
import MetaLayout from "../../components/MetaLayout";
import NavigationLayout from "../../components/NavigationLayout";
import LoadingDialog from "../../components/dialog/LoadingDialog";

const navigation = [
    { name: 'Nursery List', href: '/nursery', icon: LibraryIcon, current: false },
    { name: 'Admin List', href: '/admin', icon: UsersIcon, current: true },
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
function getNurseryType(type) {
    switch (type) {
        case 'SHADE_NET_HOUSE':
            return 'Shade Net House';
        case 'POLYHOUSE':
            return 'Polyhouse'
        case 'OPEN_LAND':
            return 'Open Land'
    }
}

export default function Nursery({ user, admin, nurseries, token }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()
    const [firstName, setFirstName] = useState(admin.firstName)
    const [lastName, setLastName] = useState(admin.lastName)
    const [loadingDialog, setLoadingDialog] = useState(false)
    const updateNurseryAdmin = async () => {
        setLoadingDialog(true)
        const fetch = require('node-fetch')
        const response = await fetch('https://api.farmerce.in/admin/nurseryAdmin/' + admin.uId + '?firstName=' + firstName + '&lastName=' + lastName, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        setLoadingDialog(false)
    }
    return (
        <>

            <MetaLayout title={admin.firstName + ' ' + admin.lastName} description={"Nursery Admin Details"} >
            </MetaLayout>
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
                                {/* Replace with your content */}
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Nursery Admin Information</h3>
                                        {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p> */}
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                        <dl className="sm:divide-y sm:divide-gray-200">
                                            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">First Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">{admin.firstName}</dd>
                                            </div> */}
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">First Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                                                    <input
                                                        defaultValue={admin.firstName}
                                                        id="name"
                                                        name="name"
                                                        type='text'
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className="rounded-full bg-gray-100 px-4 py-2 pr-14 text-sm w-full outline-none border focus:border-fgreen-700 duration-500"
                                                    />
                                                </dd>
                                            </div>
                                            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">{admin.lastName}</dd>
                                            </div> */}
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                                                    <input
                                                        defaultValue={admin.lastName}
                                                        id="name"
                                                        name="name"
                                                        type='text'
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className="rounded-full bg-gray-100 px-4 py-2 pr-14 text-sm w-full outline-none border focus:border-fgreen-700 duration-500"
                                                    />
                                                </dd>
                                            </div>
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                        <li >
                                                            <a href={"tel:+91" + admin.phoneNumber} className="group pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-gray-200 cursor-pointer duration-500">

                                                                <div className="flex-shrink-0 flex text-fgreen-700 group-hover:text-fgreen-900 duration-500">
                                                                    <svg className="group-hover:animate-wiggle" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none" /><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                                                    <div className="font-medium ml-2">

                                                                        {'+91 ' + admin.phoneNumber}
                                                                    </div>
                                                                </div>
                                                            </a>

                                                        </li>
                                                    </ul>
                                                </dd>
                                            </div>
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Joined On</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{moment(admin.creationDate).format('hh:mm A, DD MMM YYYY')}</dd>
                                            </div>
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Last Active On</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{moment(admin.lastActive).format('hh:mm A, DD MMM YYYY')}</dd>
                                            </div>
                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Nursery</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                        {
                                                            nurseries.map(n => (
                                                                <li>
                                                                    <Link href={{ pathname: '/nursery/' + n.nId }}>
                                                                        <a className="group pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-gray-200 cursor-pointer duration-500">
                                                                            <div className="w-0 flex-1 flex items-center">
                                                                                <span className="ml-2 flex-1 w-0 truncate">{n.name}</span>
                                                                            </div>
                                                                            <div className="ml-4 flex-shrink-0 flex text-fgreen-700 group-hover:text-fgreen-900 duration-500 group-hover:animate-pulse">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
                                                                            </div>
                                                                        </a>
                                                                    </Link>

                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </dd>
                                            </div>

                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500"></dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                        <li >
                                                            <a onClick={() => {
                                                                updateNurseryAdmin()
                                                            }} className="group pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-fgreen-200 cursor-pointer duration-500">
                                                                <div className="w-0 flex-1 flex items-center">
                                                                    <span className="ml-2 flex-1 w-0 truncate">UPDATE</span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0 flex text-fgreen-700 group-hover:text-fgreen-900 duration-500 group-hover:animate-pulse">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* <li >
                                                            <a onClick={() => {
                                                                deleteNursery()
                                                            }} className="group pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-red-200 cursor-pointer duration-500">
                                                                <div className="w-0 flex-1 flex items-center">
                                                                    <span className="ml-2 flex-1 w-0 truncate">DELETE</span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0 flex text-red-700 group-hover:text-red-900 duration-500 group-hover:animate-scale">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                                                                </div>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {/* <NextScript /> */}
            <LoadingDialog showDialog={loadingDialog} setShowDialog={setLoadingDialog} />
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
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    const adminResponse = await fetch('https://api.farmerce.in/admin/nurseryAdmin/' + parseInt(context.params.id), {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });
    let admin;
    if (adminResponse.status == 200) {
        admin = await adminResponse.json()
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    const adminNurseriesResponse = await fetch('https://api.farmerce.in/admin/nurseryAdmin/' + parseInt(context.params.id) + '/nursery', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });
    let nurseries;
    if (adminNurseriesResponse.status == 200) {
        const responseJson = await adminNurseriesResponse.json()
        nurseries = responseJson._embedded != null ? responseJson._embedded.nurseryResourceList : []
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    console.log(nurseries)
    return {
        props: { user, admin, nurseries, token: access_token }
    }
}