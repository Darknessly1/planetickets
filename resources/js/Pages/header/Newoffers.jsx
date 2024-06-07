import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';
import { TicketIcon } from '@heroicons/react/solid';

export default function NewOffers({ auth, user }) {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 6;

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/api/flights');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleAddTicket = async (ticket) => {
        try {
            const response = await axios.post('/add-to-dashboard', { ticket_id: ticket.TicketID });
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding ticket to dashboard:', error);
            alert('Failed to add ticket to dashboard');
        }
    };

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
            <section class="bg-gray-800 text-white m-4 rounded-3xl shadow-3">
                <div class="mx-auto max-w-screen-xl/2 px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div class="mx-auto max-w-3xl text-center">
                        <h1 class="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            New Ticket Offers

                            <span class="sm:block mb-5"> Book Your Next Flight Today! </span>
                        </h1>

                        <p class="mx-auto mt-6 max-w-xl sm:text-xl sm:leading-relaxed ">
                            Discover unbeatable deals on flights to your favorite destinations. Limited-time offers you don't want to miss!
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a class="block w-full rounded border border-yellow-300 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-300 hover:text-gray-900 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto">
                                Learn More
                            </a>
                        </div>

                    </div>
                </div>
                <div class="absolute text-center font-bold text-2xl bottom-0 left-1/2 transform -translate-x-1/2 w-80 bg-sky-600 text-white p-4 rounded-full shadow-lg" style={{ marginBottom: "-14rem" }}>
                    These are the new offers 
                </div>
            </section>


            <div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                    {displayedTickets.map((ticket) => (
                        <div key={ticket.TicketID} className="card">
                            <div className="relative max-w-sm m-4">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                                <div className="relative h-full p-3 bg-white border-2 border-black rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <TicketIcon className="w-8 h-8 text-blue-200" />
                                    </div>
                                    <p className="my-2 text-gray-600"><strong>Flight Number:</strong> {ticket.FlightNumber}</p>
                                    <p className="my-2 text-gray-600"><strong>Departure Airport:</strong> {ticket.DepartureAirport}</p>
                                    <p className="my-2 text-gray-600"><strong>Arrival Airport:</strong> {ticket.ArrivalAirport}</p>
                                    <p className="my-2 text-gray-600"><strong>Departure DateTime:</strong> {new Date(ticket.DepartureDateTime).toLocaleString()}</p>
                                    <p className="my-2 text-gray-600"><strong>Arrival DateTime:</strong> {new Date(ticket.ArrivalDateTime).toLocaleString()}</p>
                                    <p className="my-2 text-gray-600"><strong>Seat Number:</strong> {ticket.SeatNumber}</p>
                                    <p className="my-2 text-gray-600"><strong>Price:</strong> ${ticket.Price}</p>
                                    <p className="my-2 text-gray-600"><strong>Airline:</strong> {ticket.Airline}</p>
                                    <div className="flex flex-wrap justify-center gap-6">
                                        <a className="relative" href="#">
                                            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                                            <span
                                                className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900"
                                                onClick={() => handleAddTicket(ticket)}
                                            >
                                                Add to Dashboard
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center my-4">
                    <div style={{ maxWidth: '240px' }} className="flex rounded-full mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="flex-1 font-bold bg-white px-6 py-1 rounded-full"
                        >
                            Previous
                        </button>
                    </div>

                    <span className="px-4 py-2 mx-1">Page {currentPage} of {totalPages}</span>

                    <div style={{ maxWidth: '240px' }} className="flex rounded-full mx-auto bg-gradient-to-tr from-blue-400 via-black to-blue-300 p-1 shadow-lg">
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="flex-1 font-bold bg-white px-6 py-1 rounded-full"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
