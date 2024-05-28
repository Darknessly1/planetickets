import React from 'react';

const FlightTicketDetail = ({ ticket }) => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Flight Ticket Details</h1>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{ticket.cityFrom} to {ticket.cityTo}</h2>
                    <p className="text-gray-600 mb-2">Departure: {ticket.dTime}</p>
                    <p className="text-gray-600 mb-2">Arrival: {ticket.aTime}</p>
                    <p className="text-gray-600 mb-2">Price: {ticket.price} {ticket.currency}</p>
                    <p className="text-gray-600 mb-2">Airline: {ticket.airlines.join(', ')}</p>
                    <p className="text-gray-600 mb-2">Flight No: {ticket.flight_no}</p>
                </div>
            </div>
        </div>
    );
};

export default FlightTicketDetail;
    