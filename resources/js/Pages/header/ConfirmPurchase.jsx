import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

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
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Purchase Confirmation</h1>
                <div>
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
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
                    <button
                        onClick={() => handlePayment('Credit Card')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Pay with Credit Card
                    </button>
                    <button
                        onClick={() => handlePayment('PayPal')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
                    >
                        Pay with PayPal
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ConfirmPurchase;
