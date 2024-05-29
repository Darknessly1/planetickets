import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { TicketIcon } from '@heroicons/react/solid';

const Tickets = ({ auth, user }) => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const ticketsPerPage = 4;

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/api/tickets');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const totalPages = Math.ceil(tickets.length / ticketsPerPage);
    const displayedTickets = tickets.slice((currentPage - 1) * ticketsPerPage, currentPage * ticketsPerPage);

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <Nav user={user} auth={auth} />

            <section className='m-3'>
                <div class="bg-blue-200 text-white py-20 rounded-xl  flex mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
                            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
                            </h2>
                            <p class="text-sm md:text-base text-white mb-4">Explore your favourite events and
                                register now to showcase your talent and win exciting prizes.</p>
                            <a href="#"
                                class="bg-transparent hover:bg-yellow-300 text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                Explore Now</a>
                        </div>
                        <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                            <div class="h-48 flex flex-wrap content-center">
                                <div>
                                    <img class="inline-block mt-28  xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
                                <div>
                                    <img class="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
                                <div>
                                    <img class="inline-block mt-28  lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto p-4">
                <h2>Tickets</h2>
                <div className="flex">

                    <div className="flex-1 p-4">
                        <div class="flex justify-center items-center  h-screen w-full">
                            <div class="relative cursor-pointer dark:text-white">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                <div class="relative p-6 bg-black dark:bg-white border-2 border-black rounded-lg hover:scale-105 transition duration-500">
                                    <div class="flex items-center">
                                        <span class="text-xl">✈️</span>
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">Book Flight Tickets Online</h3>
                                    </div>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        Save time and hassle by booking your flight tickets online. Enjoy the convenience of comparing different airlines, prices, and schedules all in one place. Spend less time searching and more time preparing for your trip!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Tickets Section */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {displayedTickets.map(ticket => (
                                <div key={ticket.id} className="relative cursor-pointer dark:text-black">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div className="relative p-6 bg-white border-2 border-black  rounded-lg hover:scale-105 transition duration-500">
                                        <div className="flex items-center">
                                            <span classname="blue-400 text-xl blue-300" >✈️</span>
                                            <h3 className="my-2 ml-3 text-lg font-bold text-white dark:text-black">Flight: {ticket.airline_name} ({ticket.airline_code})</h3>
                                        </div>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">From:</span> {ticket.departure_airport_name} ({ticket.departure_airport_code})</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">From Country:</span> {ticket.departure_country}</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">From City:</span> {ticket.departure_city}</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">To:</span> {ticket.arrival_airport_name} ({ticket.arrival_airport_code})</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">To Country:</span> {ticket.arrival_country}</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">To City:</span> {ticket.arrival_city}</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">Date:</span> {ticket.date}</p>
                                        <p className="text-white dark:text-black"><span className="text-lg font-bold">Price:</span> {ticket.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center my-4">
                            <div style={{ maxWidth: '240px' }} className="flex rounded-full mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className="flex-1 font-bold bg-white px-6 py-1 rounded-full"
                                >
                                    Previous
                                </button>
                            </div>

                            <span className="px-4 py-2 mx-1">Page {currentPage} of {totalPages}</span>

                            <div style={{ maxWidth: '240px' }} className="flex rounded-full mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className="flex-1 font-bold  bg-white px-6 py-1 rounded-full"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="p-4 lg:p-8 dark:bg-inheret dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Tickets;



{/* 

 */}