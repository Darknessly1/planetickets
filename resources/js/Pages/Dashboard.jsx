import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import { TicketIcon } from '@heroicons/react/solid';

export default function Dashboard({ auth }) {
    const [dashboardTickets, setDashboardTickets] = useState([]);

    useEffect(() => {
        const fetchDashboardTickets = async () => {
            const response = await axios.get('/dashboard-tickets');
            setDashboardTickets(response.data);
        };

        fetchDashboardTickets();
    }, []);

    const handleShowConfirmPurchase = (ticketId) => {
        Inertia.get('/confirm-purchase', { ticketId });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/dashboard-tickets/${id}`);
            setDashboardTickets(dashboardTickets.filter(ticket => ticket.id !== id));
        } catch (error) {
            console.error('Error deleting ticket from dashboard:', error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight uppercase">Book a ticket</h2>}
        >
            <Head title="Tickets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight">Current Tickets</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {dashboardTickets.map((dashboardTicket, index) => (
                                    <div key={index} className="card">
                                        <div className="relative max-w-sm m-4">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-300 rounded-lg"></span>
                                            <div className="relative h-full p-3 bg-white border-2 border-black rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <TicketIcon className="w-8 h-8 text-red-500" />
                                                </div>
                                                <p className="my-2 text-gray-600"><strong>Flight Number:</strong> {dashboardTicket.ticket.FlightNumber}</p>
                                                <p className="my-2 text-gray-600"><strong>Departure Airport:</strong> {dashboardTicket.ticket.DepartureAirport}</p>
                                                <p className="my-2 text-gray-600"><strong>Arrival Airport:</strong> {dashboardTicket.ticket.ArrivalAirport}</p>
                                                <p className="my-2 text-gray-600"><strong>Departure DateTime:</strong> {new Date(dashboardTicket.ticket.DepartureDateTime).toLocaleString()}</p>
                                                <p className="my-2 text-gray-600"><strong>Arrival DateTime:</strong> {new Date(dashboardTicket.ticket.ArrivalDateTime).toLocaleString()}</p>
                                                <p className="my-2 text-gray-600"><strong>Seat Number:</strong> {dashboardTicket.ticket.SeatNumber}</p>
                                                <p className="my-2 text-gray-600"><strong>Price:</strong> ${dashboardTicket.ticket.Price}</p>
                                                <p className="my-2 text-gray-600"><strong>Airline:</strong> {dashboardTicket.ticket.Airline}</p>
                                                <div className="flex flex-wrap justify-center gap-6">
                                                    <button
                                                        onClick={() => handleShowConfirmPurchase(dashboardTicket.ticket.TicketID)}
                                                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                                    >
                                                        Confirm Purchase
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(dashboardTicket.ticket.TicketID)}
                                                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
