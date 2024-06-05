import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import Panes from '@/Components/Panes';
import 'tailwindcss/tailwind.css';
import 'C:\\Users\\Darknessly\\Desktop\\planetickets\\resources\\css\\app.css';

const Tickets = ({ auth, user }) => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchFromCity, setSearchFromCity] = useState('');
    const [searchToCity, setSearchToCity] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const ticketsPerPage = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: "/images/travel.jpg", alt: "Airplane" },
        { src: "/images/ss6.jpg", alt: "Booking" },
        { src: "/images/ss8.jpg", alt: "Travel" }
    ];

    const fetchTickets = async (params = {}) => {
        try {
            const response = await axios.get('/api/tickets', { params });
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    useEffect(() => {
        fetchTickets();
    }, []);

    const handleSearch = () => {
        const params = {
            fromCity: searchFromCity,
            toCity: searchToCity,
            date: searchDate,
        };
        fetchTickets(params);
    };

    const handleReset = () => {
        setSearchFromCity('');
        setSearchToCity('');
        setSearchDate('');
        fetchTickets();
    };

    const filteredTickets = tickets.slice((currentPage - 1) * ticketsPerPage, currentPage * ticketsPerPage);
    const totalPages = Math.ceil(tickets.length / ticketsPerPage);

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
                <div className="bg-blue-200 text-white py-20 rounded-xl flex mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">AMIALI</h1>
                            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Book Your Next Adventure</h2>
                            <p className="text-sm md:text-base text-white mb-4">Find the best flights at the best prices. Book your tickets now and start your journey.</p>
                            <a href="#"
                                className="bg-transparent hover:bg-yellow-300 text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                Book Now</a>
                        </div>
                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                            <div className="relative w-full h-64">
                                {images.map((image, index) => (
                                    <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" loading="lazy"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Search Tickets</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="From City"
                        value={searchFromCity}
                        onChange={e => setSearchFromCity(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="To City"
                        value={searchToCity}
                        onChange={e => setSearchToCity(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <input
                        type="date"
                        value={searchDate}
                        onChange={e => setSearchDate(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <button
                        onClick={handleSearch}
                        className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                        Reset
                    </button>
                </div>

                <h2 className="text-2xl font-bold mb-4  text-center">Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredTickets.map(ticket => (
                        <div key={ticket.id} className="relative cursor-pointer dark:text-black">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div className="relative p-6 bg-white border-2 border-black rounded-lg hover:scale-105 transition duration-500">
                                <div className="flex items-center">
                                    <span className="text-xl text-blue-300">✈️</span>
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
                            className="flex-1 font-bold bg-white px-6 py-1 rounded-full"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-4 align-middle text-center">Dicover More</h1>
                {/* <Panes /> */}
            </div>

            <Footer />
        </>
    );
};

export default Tickets;




