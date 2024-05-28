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
                <div class="h-[calc(100vh-5rem)] bg-center imgback ">
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
                                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                From: {ticket.cityFrom} ({ticket.flyFrom})
                                            </p>
                                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                To: {ticket.cityTo} ({ticket.flyTo})
                                            </p>
                                            <div className="relative grid items-center px-4 py-2 font-sans text-xs font-bold text-white uppercase bg-green-600 rounded-lg select-none whitespace-nowrap">
                                                <span className="">
                                                    ${ticket.price}
                                                </span>
                                            </div>
                                        </div>
                                        <p>Departure: {new Date(ticket.route[0].local_departure).toLocaleString()}</p>
                                        <p>Arrival: {new Date(ticket.route[ticket.route.length - 1].local_arrival).toLocaleString()}</p>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <button
                                            onClick={() => { handleAddToCart(); setOpen(false); }} // Close dropdown on button click
                                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                                            type="button"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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


        </div>
    );
}

export default FlightBookingCard;
