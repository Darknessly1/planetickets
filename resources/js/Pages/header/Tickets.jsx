// resources/js/Pages/TicketsIndex.jsx

import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';

const TicketsIndex = ({ auth, user, tickets: initialTickets }) => {
    const [currentPage, setCurrentPage] = useState(initialTickets.current_page);
    const [tickets, setTickets] = useState(initialTickets);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`/api/tickets?page=${currentPage}`);
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        Inertia.get(`/tickets?page=${page}`);
    };

    return (
        <>
            <Nav user={auth.user} auth={auth} />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Tickets</h2>
                <div className="grid grid-cols-3 gap-4">
                    {tickets.data.map((ticket) => (
                        <div key={ticket.ticket_id} className="card p-4 border rounded-lg shadow">
                            <p><strong>Departure Airport:</strong> {ticket.departure_airport_name} ({ticket.departure_airport_code})</p>
                            <p><strong>Arrival Airport:</strong> {ticket.arrival_airport_name} ({ticket.arrival_airport_code})</p>
                            <p><strong>Date:</strong> {ticket.date}</p>
                            <p><strong>Airline:</strong> {ticket.airline_name} ({ticket.airline_code})</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {tickets.links.map((link, index) => (
                        <button
                            key={index}
                            className={`mx-1 px-3 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                            onClick={() => handlePageChange(link.label)}
                            disabled={!link.url}
                        >
                            {link.label.replace('&laquo;', 'Previous').replace('&raquo;', 'Next')}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TicketsIndex;
