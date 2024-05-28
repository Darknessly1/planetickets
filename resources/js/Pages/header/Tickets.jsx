// resources/js/Pages/TicketsIndex.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';

const Tickets = ({ auth, user, tickets: initialTickets }) => {
    const [tickets, setTickets] = useState(initialTickets);
    const [search, setSearch] = useState({ departure_airport: '', arrival_airport: '', date: '', airline: '' });
    const [currentPageLeft, setCurrentPageLeft] = useState(1);
    const [currentPageRight, setCurrentPageRight] = useState(1);
    const ticketsPerPage = 1;

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`/api/tickets`, { params: { ...search, page: 1 } });
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/tickets`, { params: search });
            setTickets(response.data);
            setCurrentPageLeft(1);
            setCurrentPageRight(1);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const goToPreviousPageLeft = () => {
        if (currentPageLeft > 1) setCurrentPageLeft(currentPageLeft - 1);
    };

    const goToNextPageLeft = () => {
        const maxPage = Math.ceil(firstHalfTickets.length / ticketsPerPage);
        if (currentPageLeft < maxPage) setCurrentPageLeft(currentPageLeft + 1);
    };

    const goToPreviousPageRight = () => {
        if (currentPageRight > 1) setCurrentPageRight(currentPageRight - 1);
    };

    const goToNextPageRight = () => {
        const maxPage = Math.ceil(secondHalfTickets.length / ticketsPerPage);
        if (currentPageRight < maxPage) setCurrentPageRight(currentPageRight + 1);
    };

    const half = Math.ceil(tickets.data.length / 2);
    const firstHalfTickets = tickets.data.slice(0, half);
    const secondHalfTickets = tickets.data.slice(half);

    const displayedFirstHalfTickets = firstHalfTickets.slice((currentPageLeft - 1) * ticketsPerPage, currentPageLeft * ticketsPerPage);
    const displayedSecondHalfTickets = secondHalfTickets.slice((currentPageRight - 1) * ticketsPerPage, currentPageRight * ticketsPerPage);

    return (
        <>
            <Nav auth={auth} user={user} />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Tickets</h2>
                <div className="flex mb-4">
                    <input 
                        type="text"
                        name="departure_airport"
                        value={search.departure_airport}
                        onChange={handleInputChange}
                        placeholder="Departure Airport"
                        className="mb-4 p-2 border rounded w-1/4 mr-2"
                    />
                    <input 
                        type="text"
                        name="arrival_airport"
                        value={search.arrival_airport}
                        onChange={handleInputChange}
                        placeholder="Arrival Airport"
                        className="mb-4 p-2 border rounded w-1/4 mr-2"
                    />
                    <input 
                        type="text"
                        name="date"
                        value={search.date}
                        onChange={handleInputChange}
                        placeholder="Date"
                        className="mb-4 p-2 border rounded w-1/4 mr-2"
                    />
                    <input 
                        type="text"
                        name="airline"
                        value={search.airline}
                        onChange={handleInputChange}
                        placeholder="Airline"
                        className="mb-4 p-2 border rounded w-1/4"
                    />
                    <button
                        onClick={handleSearch}
                        className="p-4 bg-blue-500 text-white rounded"
                    >
                        Search
                    </button>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2 pr-4">
                        {displayedFirstHalfTickets.map((ticket) => (
                            <div key={ticket.ticket_id} className="card p-4 border rounded-lg shadow mb-4 bg-white">
                                <p><strong>Flight Number:</strong> {ticket.flight_number}</p>
                                <p><strong>Departure Airport:</strong> {ticket.departure_airport_name} ({ticket.departure_airport_code})</p>
                                <p><strong>Arrival Airport:</strong> {ticket.arrival_airport_name} ({ticket.arrival_airport_code})</p>
                                <p><strong>Date:</strong> {ticket.date}</p>
                                <p><strong>Airline:</strong> {ticket.airline_name} ({ticket.airline_code})</p>
                                <p><strong>Passenger Name:</strong> {ticket.passenger_name}</p>
                            </div>
                        ))}
                        <div className="flex justify-center my-4">
                            <button
                                onClick={goToPreviousPageLeft}
                                disabled={currentPageLeft === 1}
                                className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 mx-1">Page {currentPageLeft} of {Math.ceil(firstHalfTickets.length / ticketsPerPage)}</span>
                            <button
                                onClick={goToNextPageLeft}
                                disabled={currentPageLeft === Math.ceil(firstHalfTickets.length / ticketsPerPage)}
                                className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 pl-4">
                        {displayedSecondHalfTickets.map((ticket) => (
                            <div key={ticket.ticket_id} className="card p-4 border rounded-lg shadow mb-4 bg-white">
                                <p><strong>Flight Number:</strong> {ticket.flight_number}</p>
                                <p><strong>Departure Airport:</strong> {ticket.departure_airport_name} ({ticket.departure_airport_code})</p>
                                <p><strong>Arrival Airport:</strong> {ticket.arrival_airport_name} ({ticket.arrival_airport_code})</p>
                                <p><strong>Date:</strong> {ticket.date}</p>
                                <p><strong>Airline:</strong> {ticket.airline_name} ({ticket.airline_code})</p>
                                <p><strong>Passenger Name:</strong> {ticket.passenger_name}</p>
                            </div>
                        ))}
                        <div className="flex justify-center my-4">
                            <button
                                onClick={goToPreviousPageRight}
                                disabled={currentPageRight === 1}
                                className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 mx-1">Page {currentPageRight} of {Math.ceil(secondHalfTickets.length / ticketsPerPage)}</span>
                            <button
                                onClick={goToNextPageRight}
                                disabled={currentPageRight === Math.ceil(secondHalfTickets.length / ticketsPerPage)}
                                className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tickets;
