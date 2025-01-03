import React, { useState } from 'react';
import axios from 'axios';

const cityCodeMap = {
    'los angeles': 'LAX',
    'paris': 'PAR',
    'new york city': 'NYC',
    'tokyo': 'TYO',
    'sydney': 'SYD',
    'berlin': 'BER',
    'rome': 'ROM',
    'dubai': 'DXB',
    'singapore': 'SIN',
    'moscow': 'MOW',
};

function FlightBookingCard({ ticket }) {
    const [formData, setFormData] = useState({
        departureCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate: '',
    });
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value.toLowerCase(),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formattedDepartureDate = new Date(formData.departureDate).toISOString().split('T')[0];
            const formattedReturnDate = new Date(formData.returnDate).toISOString().split('T')[0];

            const departureCityCode = cityCodeMap[formData.departureCity.toLowerCase()];
            const destinationCityCode = cityCodeMap[formData.destinationCity.toLowerCase()];

            const response = await axios.get(
                'https://api.tequila.kiwi.com/v2/search',
                {
                    params: {
                        fly_from: departureCityCode,
                        fly_to: destinationCityCode,
                        date_from: formattedDepartureDate,
                        date_to: formattedReturnDate,
                        limit: 10,
                    },
                    headers: {
                        accept: 'application/json',
                        apikey: 'XvPBBJt16Efdg3uPDXDjAj5RZ5LdcTOa',
                    },
                }
            );
            setTickets(response.data.data);
        } catch (error) {
            console.error('Error fetching flight tickets:', error);
            setError('Error fetching flight tickets');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <div>
                <div class="h-[calc(100vh-5rem)] bg-center imgback rounded-3xl m-4 ">
                    <div class="mx-auto flex flex-col justify-center h-full">
                        <div class="mx-auto w-10/12 lg:w-2/5 text-center text-white">
                            <h1 class="text-7xl mb-4"><span class="text-white-600">Let’s talk</span> about your next trip!</h1>
                            <p class="text-2xl mb-8">Find your favorite travel destination and we will find it for you!</p>
                            <div class="flex justify-center">
                                <button class="rounded px-10 py-3 text-white bg-sky-600 hover:bg-violet-600">Find More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute text-center font-bold text-2xl bottom-0 left-1/2 transform -translate-x-1/2 w-80 bg-sky-600 text-white p-4 rounded-full shadow-lg" style={{ marginBottom: "-9rem" }}>
                    Search for your flight
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 m-14">
                <div className="col-span-1  overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src="/images/ss.jpg"
                        alt="card-image" className="object-cover w-full h-full"
                    />
                </div>
                <div className="col-span-1 max-w-md bg-gray-500 shadow-lg overflow-hidden">
                    <div className="px-4 py-2 bg-gray-800">
                        <h1 className="text-white font-bold text-lg">Booking </h1>
                    </div>
                    <div className="px-4 py-2">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="departureCity" className="block text-white  mb-1">Departure City:</label>
                                <input
                                    type="text"
                                    id="departureCity"
                                    name="departureCity"
                                    placeholder="Enter Departure City"
                                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                    value={formData.departureCity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="destinationCity" className="block text-white mb-1">Destination City:</label>
                                <input
                                    type="text"
                                    id="destinationCity"
                                    name="destinationCity"
                                    placeholder="Enter Destination City"
                                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                    value={formData.destinationCity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="departureDate" className="block text-white  mb-1">Departure Date:</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                    value={formData.departureDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="returnDate" className="block text-white  mb-1">Return Date:</label>
                                <input
                                    type="date"
                                    id="returnDate"
                                    name="returnDate"
                                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                    value={formData.returnDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    {loading ? 'Loading...' : 'Search Flights'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* startups */}
                {/* Startups div */}
                <div className="col-span-1 bg-white text-gray-700 shadow-md max-w-[48rem] flex items-center">
                    <div className="p-6">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                            Aviation Travel Start-Up
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Making Flight Booking Effortless
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            Our aviation travel start-up aims to revolutionize the way people book flights online. We provide a seamless and user-friendly platform that makes booking tickets quick, easy, and hassle-free. Say goodbye to long queues and complicated booking processes!
                        </p>
                        <a href="#" className="inline-block">
                            <button className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

            </div>


            <div className="mt-8 w-full">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4">
                        {tickets.map((ticket, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                                <div className="relative cursor-pointer text-black">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-600"></span>
                                    <div className="relative p-6 bg-white border-2 border-black rounded-lg hover:scale-105 transition duration-500">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-black">
                                                    From: {ticket.cityFrom} ({ticket.flyFrom})
                                                </p>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-black">
                                                    To: {ticket.cityTo} ({ticket.flyTo})
                                                </p>
                                            </div>
                                            <div className="relative grid items-center px-4 py-2 font-sans text-xs font-bold text-white uppercase bg-green-600 rounded-lg select-none whitespace-nowrap">
                                                <span>
                                                    ${ticket.price}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 ">
                                            Departure: {new Date(ticket.route[0].local_departure).toLocaleString()}
                                        </p>
                                        <p className="text-gray-600 ">
                                            Arrival: {new Date(ticket.route[ticket.route.length - 1].local_arrival).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>




        </div>
    );
}

export default FlightBookingCard;
