import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

const ConfirmPurchase = () => {
    const { props } = usePage();
    const { ticketId } = props;
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);

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
        // Implement payment processing logic here
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight uppercase">Confirm Purchase</h2>}
        >
            <Head title="Confirm Purchase" />
            <div className="container mx-auto p-4 m-4">
                <h1 className="text-2xl font-bold mb-4 text-slate-50">Purchase Confirmation</h1>
                <div className="flex">
                    <div className="w-1/2 text-white pr-4">
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
                    <div className="w-1/2 text-white pl-4">
                        <h2 className="text-xl font-semibold mb-2">Additional Options</h2>
                        <div className="mb-2">
                            <label>
                                <input type="checkbox" /> Add more luggage
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <input type="checkbox" /> Traveling with kids
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <input type="checkbox" /> Book hotel
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <input type="checkbox" /> Select meal options
                            </label>
                        </div>
                        <h2 className="text-xl font-semibold mt-4 mb-2">Payment Methods</h2>
                        <button
                            onClick={() => handlePayment('Credit Card')}
                            class="fold-bold relative inline-block  rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-green-500 hover:text-white"
                        >
                            Pay with Credit Card
                        </button>
                        <button
                            onClick={() => handlePayment('PayPal')}
                            class="fold-bold relative inline-block  rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-green-500 hover:text-white"
                        >
                            Pay with PayPal
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
        
    );
};

export default ConfirmPurchase;
