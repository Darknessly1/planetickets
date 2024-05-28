import { Link } from '@inertiajs/react';
import Dropdown from './Dropdown';
import ButtonsSec from './ButtonsSec';
import SubNav from './SubNav';

export default function Nav({ auth, user }) {

    return (
        <>
            <SubNav />
            <div className="m-5 mx-auto flex h-20 w-full max-w-screen-xl rounded-xl border border-white/80 bg-slate-400	 bg-opacity-800 px-6 py-3 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200">
                <div className="relative  z-0 flex flex-col justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center py-5 lg:grid-cols-7">

                            <ButtonsSec>
                                <a
                                    href='/tickets'
                                    className="rounded-md px-3 py-2  ring-1 text-black ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Available Tickets
                                </a>
                            </ButtonsSec>

                            <ButtonsSec>
                                <a
                                    href='/newoffers'
                                    className="rounded-md px-3 py-2  ring-1 text-black ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    New Offers
                                </a>
                            </ButtonsSec>

                            <nav
                                className="-mx-3 flex flex-1 justify-end buttons-container"
                            >
                                {auth.user ? (
                                    <>
                                        <ButtonsSec>
                                            <Link
                                                href={route('dashboard')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white "
                                            >
                                                Tickets
                                            </Link>
                                        </ButtonsSec>
                                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                                            <div className="ms-3 relative">
                                                <Dropdown >
                                                    <Dropdown.Trigger>
                                                        <span className="inline-flex rounded-md">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"

                                                            >
                                                                {user} profile
                                                                <svg
                                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </span>
                                                    </Dropdown.Trigger>

                                                    <Dropdown.Content>
                                                        <Dropdown.Link href={route('profile.edit')}>Setting</Dropdown.Link>
                                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                                            Log Out
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </div>

                                    </>
                                ) : (
                                    <div class="">
                                        <ButtonsSec>
                                            <Link
                                                href={route('login')}
                                                className="rounded-md px-3 py-2  ring-1 text-black ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Log in
                                            </Link>
                                        </ButtonsSec>

                                        <ButtonsSec>
                                            <Link
                                                href={route('register')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Register
                                            </Link>
                                        </ButtonsSec>
                                    </div>
                                )}
                            </nav>
                        </header>

                    </div>
                </div>
            </div>
        </>
    )
}