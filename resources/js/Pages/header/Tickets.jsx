import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { TicketIcon } from '@heroicons/react/solid';

const Tickets = ({ auth, user }) => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const ticketsPerPage = 6;

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
            <div className="container mx-auto p-4">
                <h2>Tickets</h2>

                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {displayedTickets.map(ticket => (
                            <div key={ticket.id} className="p-4 bg-white shadow rounded-lg">
                                <h2 className="text-lg font-bold">{ticket.passenger_name}</h2>
                                <p>Flight: {ticket.airline_name} ({ticket.airline_code})</p>
                                <p>From: {ticket.departure_airport_name} ({ticket.departure_airport_code})</p>
                                <p>To: {ticket.arrival_airport_name} ({ticket.arrival_airport_code})</p>
                                <p>Date: {ticket.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center my-4">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 mx-1">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            </div>
            <Footer />
        </>
    );
};

export default Tickets;
