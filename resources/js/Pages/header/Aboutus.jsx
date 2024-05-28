import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";

export default function BookingTicketFeatures({ auth, user }) {
    return (
        <>
            <Nav auth={auth} user={user} />
            <div className="container my-24 mx-auto md:px-6 bg-slate-400 p-5 rounded-2xl border-black border-4">
                <section className="mb-32 text-center">
                    <div className="flex justify-center">
                        <div className="max-w-[700px] text-center">
                            <h2 className="mb-6 text-center text-3xl font-bold">
                                Why Choose<u className="text-blue-500 dark:text-blue-700">
                                    AMiALI?</u>
                            </h2>
                            <p className="mb-16 text-black dark:text-black">
                                Making ticket booking hassle-free and enjoyable for everyone.
                                We focus on simplicity, convenience, and reliability.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Safe and Secure</h5>
                            <p className="text-neutral-500 dark:text-black">
                                Your security is our top priority. We use advanced encryption
                                technologies to ensure your data is always protected.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">User-Friendly Interface</h5>
                            <p className="text-neutral-500 dark:text-black">
                                Our platform is designed with simplicity in mind. Booking tickets
                                has never been easier with our intuitive interface.
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Fast and Reliable</h5>
                            <p className="text-neutral-500 dark:text-black">
                                Say goodbye to long waiting times. Our system is optimized for
                                speed and reliability, ensuring you get your tickets instantly.
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">24/7 Customer Support</h5>
                            <p className="text-neutral-500 dark:text-black">
                                Need assistance? Our support team is available round the clock
                                to help you with any queries or concerns you may have.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
