import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";

export default function Services({ auth, user }) {
    return (
        <>
            <Nav auth={auth} user={user} />
            <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
                <p class="mb-12 text-lg text-gray-500">Here are a few of the awesome services we provide.</p>
                <div class="w-full">
                    <div class="flex flex-col w-full mb-10 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Flight Booking</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Easily search and book flights to your desired destinations with our user-friendly interface and secure booking system.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Customer Support</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter during the booking process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full mb-5 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Flight Status Updates</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Stay informed with real-time flight status updates, including delays, cancellations, and gate changes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-red-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Travel Insurance</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-red-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Protect your trip with our comprehensive travel insurance options, covering medical emergencies, trip cancellations, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Exclusive Deals</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Access exclusive deals and discounts on flights, making your travel more affordable and enjoyable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}