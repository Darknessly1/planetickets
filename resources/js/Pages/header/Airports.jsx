import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';

function AirportList({ auth, user }) {
    const [airports, setAirports] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [airportsPerPage] = useState(6);

    useEffect(() => {
        axios.get('/api/airport')
            .then(response => {
                setAirports(response.data);
            })
            .catch(error => {
                console.error('Error fetching airports:', error);
            });
    }, []);

    // Pagination
    const indexOfLastAirport = currentPage * airportsPerPage;
    const indexOfFirstAirport = indexOfLastAirport - airportsPerPage;
    const currentAirports = airports.slice(indexOfFirstAirport, indexOfLastAirport);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);

    return (
        <>
            <Nav user={user} auth={auth} />
            <section class="mb-40 overflow-hidden">

                <div
                    class="relative rounded-3xl m-4 overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')]">
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
                        <div class="flex h-full items-center justify-center">
                            <div class="px-6 text-center text-white md:px-12">
                                <h1 class="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                    The best way to finde <br /><span>where your next trip start</span>
                                </h1>
                                <input
                                    type="text"
                                    placeholder="Search for an airport..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="m-5 w-64 p-2 mb-4 border rounded-lg dark:bg-white dark:text-black"
                                />
                                <div class="m-4 flex flex-wrap justify-center gap-6">
                                    <a class="relative" href="#">
                                        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-white"></span>
                                        <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-gray-500 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-blue-400 hover:text-gray-900">
                                            Discover more
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="flex flex-col items-center justify-center  h-screen">
                <div className="grid grid-cols-3 gap-4">
                    {currentAirports
                        .filter(airport => airport.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(airport => (
                            <div key={airport.code} className="w-full max-w-sm mx-auto">
                                <div className="relative cursor-pointer dark:text-black">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-900"></span>
                                    <div className="relative p-6 bg-white dark:bg-white-800 border-2 border-indigo-500 dark:border-black rounded-lg hover:scale-105 transition duration-500">
                                        <div className="flex items-center">
                                            <span className="text-xl">✈️</span>
                                            <h3 className="my-2 ml-3 text-lg font-bold text-black dark:text-black">{airport.name}</h3>
                                        </div>
                                        <p className="text-black dark:text-black">City: {airport.city}</p>
                                        <p className="text-black dark:text-black">Country: {airport.country}</p>
                                        <div class="m-4 flex flex-wrap justify-center gap-6">
                                            <a class="relative">
                                                <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                                                <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-400 hover:text-gray-900">
                                                    Discover more
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Pagination */}
                <div className="mt-auto mb-4 flex">
                    <button
                        onClick={prevPage}
                        className="px-3 py-1 mx-1 rounded-lg focus:outline-none bg-gray-400 text-white transition duration-300 hover:bg-gray-600"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: Math.ceil(airports.length / airportsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 mx-1 rounded-lg focus:outline-none ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'
                                } transition duration-300 hover:bg-indigo-500`}
                        >
                            {i + 1}
                        </button>
                    )).slice(
                        Math.max(0, currentPage - 2),
                        Math.min(currentPage + 1, Math.ceil(airports.length / airportsPerPage))
                    )}
                    <button
                        onClick={nextPage}
                        className="px-3 py-1 mx-1 rounded-lg focus:outline-none bg-gray-400 text-white transition duration-300 hover:bg-gray-600"
                        disabled={currentPage === Math.ceil(airports.length / airportsPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AirportList;
