import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';
import FlightTicketDetail from './FlightTicketDetail';

const FlightTickets = ({ auth, user }) => {
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/flight-tickets');
                setTickets(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching flight tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleTicketDetailsClick = (ticketId) => {
        const selected = tickets.find(ticket => ticket.id === ticketId);
        setSelectedTicket(selected);
        setExpandedCard(ticketId);
    };

    const handleCloseDetails = () => {
        setSelectedTicket(null);
        setExpandedCard(null);
    };

    return (
        <>
            <Nav auth={auth} user={user} />
            <div className="container mx-auto mt-8 m-5">
                <h1 className="italic font-bold mb-4 text-black text-5xl">Flight Tickets</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tickets.map(ticket => (
                        <div key={ticket.id} className={`md:w-full rounded-lg shadow-lg mt-5 dark:shadow-blue-900 bg-white overflow-hidden ${expandedCard === ticket.id ? 'expanded' : ''}`}>
                            <div className="flex flex-col items-center md:items-start px-6 py-4">
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <h2 className="font-bold text-2xl dark:text-gray-900">{ticket.cityFrom} to {ticket.cityTo}</h2>
                                    </div>
                                    <div className="border-2 border-blue-500 mb-3 text"></div>
                                </div>
                                <div className="text-gray-500 dark:text-gray-200 text-center md:text-start">
                                    <p className="text-gray-600 mb-2">Departure: {ticket.dTime}</p>
                                    <p className="text-gray-600 mb-2">Arrival: {ticket.date_to}</p>
                                    <p className="text-gray-600 mb-2">Price: {ticket.price} {ticket.currency}</p>
                                    <p className="text-gray-600 mb-2">Airline: {ticket.airlines.join(', ')}</p>
                                    <p className="text-gray-600 mb-2">Flight No: {ticket.flight_no}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:items-start bg-gray-100 px-6 py-3 rounded-lg dark:bg-blue-100">
                                {!selectedTicket && (
                                    <button onClick={() => handleTicketDetailsClick(ticket.id)} className="bg-gray-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">View Details</button>
                                )}
                            </div>
                            {selectedTicket && selectedTicket.id === ticket.id && (
                                <div className="mt-4 bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                    <div className="p-4 flex justify-between items-center">
                                        <h2 className="text-xl font-bold">Selected Ticket Details</h2>
                                        <button onClick={handleCloseDetails}>X</button>
                                    </div>
                                    <FlightTicketDetail ticket={selectedTicket} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>



            </div>
            <Footer />
        </>
    );
};

export default FlightTickets;
