import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faCity, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';

export default function SubNav() {

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isOpenDrop = () => {
        setOpen(!open);
    };



    return (
        <>
            <nav class=" m-2 mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 px-6 py-3 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200">
                <div class="flex items-center justify-between text-blue-gray-900">
                    <a
                        href="#"
                        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
                    >
                        AMIALI
                    </a>
                    <div class="hidden lg:block">
                        <ul class="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li class="block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased">
                                <a
                                    href="/"
                                    class="flex items-center transition-colors hover:text-blue-500"
                                >
                                    Home
                                </a>
                            </li>
                            <li
                                data-popover-target="menu"
                                class="relative block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased text-black"
                            >
                                <div
                                    role="button"
                                    class="flex w-full items-center gap-2 rounded-lg bg-blue-gray-50/50 p-3 py-2 pr-4 text-start font-medium leading-tight text-black outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                    onClick={toggleDropdown}
                                >
                                    Resources
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="hidden h-3 w-3 transition-transform lg:block"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="block h-3 w-3 rotate-180 transition-transform lg:hidden"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </div>
                            </li>


                            <li
                                data-popover-target="menu"
                                class="relative block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased text-black"
                            >
                                <div
                                    role="button"
                                    class="flex w-full items-center gap-2 rounded-lg bg-blue-gray-50/50 p-3 py-2 pr-4 text-start font-medium leading-tight text-black outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                    onClick={isOpenDrop}
                                >
                                    More To discover
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="hidden h-3 w-3 transition-transform lg:block"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="block h-3 w-3 rotate-180 transition-transform lg:hidden"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </div>
                            </li>

                        </ul>

                    </div>
                    <button
                        class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button"
                    >
                        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                class="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    className="mr-14 text-black absolute right-0 z-[999] w-fit max-w-screen-xl  rounded-xl border border-gray-800 bg-slate-200 p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none" id=":r8:"
                >
                    <ul>
                        <li>
                            <a href="/cities">
                                <button
                                    role="menuitem"
                                    class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            stroke-width="2"
                                            class="h-6 w-6 text-gray-900"
                                        >
                                            <FontAwesomeIcon icon={faCity} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                            Cities
                                        </h6>
                                    </div>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="/hotels">
                                <button
                                    role="menuitem"
                                    class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            stroke-width="2"
                                            class="h-6 w-6 text-gray-900"
                                        >
                                            <FontAwesomeIcon icon={faHotel} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                            Hotels
                                        </h6>
                                    </div>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="/airports">
                                <button
                                    role="menuitem"
                                    class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            stroke-width="2"
                                            class="h-6 w-6 text-gray-900"
                                        >
                                            <FontAwesomeIcon icon={faPlaneDeparture} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                            Air Ports
                                        </h6>
                                    </div>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            )}


            {isOpen && (
                <div
                    className="mr-8 text-black absolute right-0 z-[999] w-full max-w-screen-xl overflow-auto rounded-xl border border-gray-800 bg-slate-200 p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none" id=":r8:"
                    role="menu"
                    data-popover="menu"
                    data-popover-placement="bottom"
                >
                    <ul
                        class="grid grid-cols-3 gap-y-2 outline-none outline-0"
                        role="menuitem"
                    >
                        
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                            clip-rule="evenodd"
                                        ></path>
                                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <a href="/aboutus">
                                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                            About Us
                                        </h6>
                                        <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
                                            Meet and learn about our dedication
                                        </p>
                                    </a>
                                </div>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                        Blog
                                    </h6>
                                    <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
                                        Find the perfect solution for your needs.
                                    </p>
                                </div>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                        Services
                                    </h6>
                                    <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
                                        Learn how we can help you achieve your goals.
                                    </p>
                                </div>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                        Support
                                    </h6>
                                    <p class="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
                                        Reach out to us for assistance or inquiries
                                    </p>
                                </div>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <a href="/contact">
                                        <h6 class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                            Contact
                                        </h6>
                                        <p class="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
                                            Find the perfect solution for your needs.
                                        </p>
                                    </a>
                                </div>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                role="menuitem"
                                class="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            >
                                <div class="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        stroke-width="2"
                                        class="h-6 w-6 text-gray-900"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                                            clip-rule="evenodd"
                                        ></path>
                                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <a href='/news'>
                                        <h6
                                            class="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased"
                                        >
                                            News
                                        </h6>
                                        <p class="block font-sans text-xs  !font-medium text-blue-gray-500 antialiased">
                                            Read insightful articles, tips, and expert opinions.
                                        </p>
                                    </a>
                                </div>
                            </button>
                        </a>
                        
                        
                    </ul>
                </div>
            )}
        </>
    )
}