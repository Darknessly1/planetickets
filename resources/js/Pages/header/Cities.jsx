// Cities.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';

const Cities = ({ auth, user }) => {
    const [cities, setCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [citiesPerPage] = useState(9);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countries = response.data;

                let citiesList = [];

                countries.forEach(country => {
                    if (country.capital) {
                        citiesList.push({
                            name: country.capital[0],
                            country: country.name.common,
                            population: country.population,
                            flag: country.flags.png,
                            region: country.region,
                            subregion: country.subregion
                        });
                    }
                });

                setCities(citiesList);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    // Logic for pagination
    const indexOfLastCity = currentPage * citiesPerPage;
    const indexOfFirstCity = indexOfLastCity - citiesPerPage;
    const currentCities = cities
        .filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase()) || city.country.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(indexOfFirstCity, indexOfLastCity);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Handle search term change
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    return (
        <>
            <Nav auth={auth} user={user} />
            <div
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1684487747385-442d674962f2) no-repeat center',
                    backgroundSize: 'cover'
                }}
                className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
            >
                <h1 className="pb-4">Search for your city</h1>
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                    <div className="relative z-30 text-base text-black">
                        <input
                            type="text"
                            placeholder="Search by city or country..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
                        />
                        <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-3 gap-4 m-5">
                    {currentCities.map((city, index) => (
                        <div key={index} className="max-w-sm">
                            <div className="shadow-lg rounded overflow-hidden">
                                <img
                                    src={city.flag}
                                    alt={`${city.name} flag`}
                                    className="object-cover w-full h-64"
                                />
                                <div className="bg-white p-6">
                                    <h1 className="font-extrabold text-3xl">{city.name}</h1>
                                    <p className="font-light text-xl italic text-gray-800">{city.description}</p>
                                    <p className="mt-4 font-light text-sm text-gray-500">{city.position}</p>
                                    <p className="mt-1 font-semibold text-sm text-gray-900">{city.country}</p>
                                    <p className="mt-1 font-semibold text-sm text-gray-900">Population: {city.population}</p>
                                    <p className="mt-1 font-semibold text-sm text-gray-900">Region: {city.region}</p>
                                    <p className="mt-1 font-semibold text-sm text-gray-900">Subregion: {city.subregion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>





                <div className="mt-4 flex justify-center space-x-2 m-4">
                    {currentPage > 1 && (
                        <button onClick={() => paginate(currentPage - 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                            Previous
                        </button>
                    )}

                    {Array.from({ length: Math.min(Math.ceil(cities.length / citiesPerPage), 4) }).map((_, index) => {
                        const pageNumber = currentPage + index - 1;
                        return (
                            <button
                                key={index}
                                onClick={() => paginate(pageNumber)}
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${pageNumber === currentPage ? 'bg-blue-700' : ''}`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {currentPage < Math.ceil(cities.length / citiesPerPage) && (
                        <button onClick={() => paginate(currentPage + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                            Next
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cities;
