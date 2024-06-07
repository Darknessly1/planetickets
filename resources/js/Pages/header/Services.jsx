import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";

export default function Services({ auth, user }) {
    return (
        <>
            <Nav auth={auth} user={user} />
            <section class="container mx-auto p-10 md:py-10 px-0 md:p-10 md:px-0">
                <section class="relative px-10 md:p-0 transform duration-500 ">
                    <img class="xl:max-w-6xl" src="images/ss3.jpg" alt="" />
                    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-32 right-5">
                        <div class="flex justify-between font-bold text-sm">
                            <p>Aviation News</p>
                            <p class="text-gray-400">30th April, 2024</p>
                        </div>
                        <h2 class="text-3xl font-semibold mt-4 md:mt-10">Revolutionizing Air Travel</h2>
                        <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">The aviation industry is undergoing transformative changes, with innovations in electric aircraft, sustainable fuels, and advanced air traffic management systems. These advancements promise to make air travel more efficient, affordable, and environmentally friendly.</p>
                        <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read More</button>
                    </div>
                </section>
            </section>



            <div class="relative overflow-hidden bg-white m-4 rounded-lg">
                <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div class="sm:max-w-lg">
                            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Explore Aviation Destinations</h1>
                            <p class="mt-4 text-xl text-gray-500">Discover your next adventure with easy access to all the aviation destinations you desire. From bustling cities to serene getaways, find the perfect destination for your next trip.</p>
                        </div>
                        <div>
                            <div class="mt-10">
                                <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div class="flex items-center space-x-6 lg:space-x-8">
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="images/destination1.jpg" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/destination2.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/destination3.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/destination4.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/destination5.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/ss2.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="images/destination7.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Explore Destinations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}