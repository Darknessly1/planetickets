import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import SubNav from '@/Components/SubNav';
import Nav from '@/Components/Nav';

const ConfirmPurchase = ({auth, user}) => {
    const { props } = usePage();
    const { ticketId } = props;
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);

    const [addLuggage, setAddLuggage] = useState(false);
    const [luggageWeight, setLuggageWeight] = useState('');
    const [travelWithKids, setTravelWithKids] = useState(false);
    const [numberOfKids, setNumberOfKids] = useState('');
    const [bookHotel, setBookHotel] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState('');
    const [selectMeal, setSelectMeal] = useState(false);
    const [mealOption, setMealOption] = useState('');

    const hotelOptions = ['Hotel A', 'Hotel B', 'Hotel C'];
    const mealOptions = ['Vegetarian', 'Non-Vegetarian', 'Vegan'];

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await axios.get(`/ticket/${ticketId}`);
                setTicket(response.data);
            } catch (err) {
                setError('Error fetching ticket details.');
                console.error(err);
            }
        };

        if (ticketId) {
            fetchTicket();
        }
    }, [ticketId]);

    if (!ticketId) return <div>No ticket selected.</div>;
    if (error) return <div>{error}</div>;
    if (!ticket) return <div>Loading...</div>;

    const handlePayment = (method) => {
        console.log(`Processing payment with ${method}`);
    };

    return (
        <>
            <Nav auth={auth} user={user} />
            <Head title="Confirm Purchase" />
            <div className="container mx-auto p-4 m-4">
                <h1 className="text-2xl font-bold mb-4 text-black">Purchase Confirmation</h1>
                <div className="flex">
                    <div className="w-1/2 text-black pr-4">
                        <h2 className="text-xl font-semibold mb-2">Ticket Information</h2>
                        <p><strong>Passenger Name:</strong> {ticket.PassengerName}</p>
                        <p><strong>Flight Number:</strong> {ticket.FlightNumber}</p>
                        <p><strong>Departure Airport:</strong> {ticket.DepartureAirport}</p>
                        <p><strong>Arrival Airport:</strong> {ticket.ArrivalAirport}</p>
                        <p><strong>Departure DateTime:</strong> {new Date(ticket.DepartureDateTime).toLocaleString()}</p>
                        <p><strong>Arrival DateTime:</strong> {new Date(ticket.ArrivalDateTime).toLocaleString()}</p>
                        <p><strong>Seat Number:</strong> {ticket.SeatNumber}</p>
                        <p><strong>Price:</strong> ${ticket.Price}</p>
                        <p><strong>Airline:</strong> {ticket.Airline}</p>
                    </div>
                    <div className="w-1/2 text-black pl-4">
                        <h2 className="text-xl font-semibold mb-2">Additional Options</h2>
                        <div className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={addLuggage}
                                    onChange={() => setAddLuggage(!addLuggage)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2">Add more luggage</span>
                            </label>
                            {addLuggage && (
                                <div className="mt-2">
                                    <label>
                                        <span className="block text-black">Luggage Weight (kg):</span>
                                        <input
                                            type="number"
                                            value={luggageWeight}
                                            onChange={(e) => setLuggageWeight(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2  border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={travelWithKids}
                                    onChange={() => setTravelWithKids(!travelWithKids)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2">Traveling with kids</span>
                            </label>
                            {travelWithKids && (
                                <div className="mt-2">
                                    <label>
                                        <span className="block text-black">Number of Kids:</span>
                                        <select
                                            value={numberOfKids}
                                            onChange={(e) => setNumberOfKids(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="1">One kid</option>
                                            <option value="2">Two kids</option>
                                            <option value="3">Three kids</option>
                                            <option value="more">More</option>
                                        </select>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={bookHotel}
                                    onChange={() => setBookHotel(!bookHotel)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2">Book hotel</span>
                            </label>
                            {bookHotel && (
                                <div className="mt-2">
                                    <label>
                                        <span className="block text-black">Select Hotel:</span>
                                        <select
                                            value={selectedHotel}
                                            onChange={(e) => setSelectedHotel(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            {hotelOptions.map((hotel) => (
                                                <option key={hotel} value={hotel}>{hotel}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectMeal}
                                    onChange={() => setSelectMeal(!selectMeal)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2">Select meal options</span>
                            </label>
                            {selectMeal && (
                                <div className="mt-2">
                                    <label>
                                        <span className="block text-black">Meal Option:</span>
                                        <select
                                            value={mealOption}
                                            onChange={(e) => setMealOption(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2  border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            {mealOptions.map((meal) => (
                                                <option key={meal} value={meal}>{meal}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            )}
                        </div>

                        <h2 className="text-xl font-semibold mt-4 mb-2">Payment Methods</h2>
                        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                            <div className="flex justify-between mb-4">
                                <div className="w-full flex flex-col">
                                    <p className="text-muted">Card number</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="w-32 flex flex-col ml-4">
                                    <p className="text-muted">Expires</p>
                                    <input
                                        className="form-control2"
                                        type="text"
                                        placeholder="MM/YYYY"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="w-full flex flex-col">
                                    <p className="text-muted">Cardholder name</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="w-24 flex flex-col ml-4">
                                    <p className="text-muted">CVC</p>
                                    <input
                                        className="form-control3"
                                        type="text"
                                        placeholder="XXX"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => handlePayment('Credit Card')}
                            >
                                <span class="absolute top-0 left-0 mt-1 ml-1 rounded bg-gray-700"></span>
                                <span class="fold-bold relative inline-block rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                                    Purchase
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ConfirmPurchase;
