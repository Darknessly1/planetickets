import React, { useState } from 'react';
import 'C:\\Users\\Darknessly\\Desktop\\planetickets\\resources\\css\\app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Ensure Font Awesome is imported

const panesData = [
    { color: 'red', icon: 'plane-departure', title: 'Flights', subtitle: 'Book your flights', bg: 'flight-booking' },
    { color: 'yellow', icon: 'hotel', title: 'Hotels', subtitle: 'Find the best stays', bg: 'hotel-booking' },
    { color: 'green', icon: 'landmark', title: 'Airports', subtitle: 'Navigate airports', bg: 'airport' },
    { color: 'blue', icon: 'ticket-alt', title: 'Tickets', subtitle: 'Manage your tickets', bg: 'ticket' },
    { color: 'purple', icon: 'globe', title: 'Travel', subtitle: 'Explore the world', bg: 'travel' }
];

const Panes = () => {
    const [activePaneIndex, setActivePaneIndex] = useState(0);

    return (
        <div className="m-3 rounded-3xl antialiased bg-gradient-to-b flex flex-col font-sans  items-stretch justify-center sm:flex-row sm:items-center">
            <div className="flex flex-col flex-grow items-stretch max-w-6xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
                {panesData.map((pane, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === index ? 'active' : ''}`}
                        onClick={() => setActivePaneIndex(index)}
                    >
                        <div className={`absolute background bg-center bg-cover bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 bg-${pane.bg}`}></div>
                        <div className={`absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20`}></div>
                        <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                            <div className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${pane.color}-500 w-10`}>
                                <i className={`fas fa-${pane.icon}`}></i>
                            </div>
                            <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                                <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">{pane.title}</div>
                                <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">{pane.subtitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Panes;