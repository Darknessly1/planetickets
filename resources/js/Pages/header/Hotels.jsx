import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hotels({ auth, user }) {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(6); // Update to 6 for six cards per page

  useEffect(() => {
    axios.get('/api/hotels')
      .then(response => {
        console.log(response);
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
  const prevPage = () => setCurrentPage(prevPage => prevPage - 1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(hotels.length / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    const pageNumberClass = `h-8 px-5 text-gray-400 font-bold transition-colors duration-150 bg-white border border-r-0 border-gray-500 focus:shadow-outline hover:bg-indigo-100 ${currentPage === number ? 'text-white bg-blue-900' : ''}`;

    return (
      <li key={number}>
        <button
          className={pageNumberClass}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      </li>
    );
  });




  return (
    <>
      <Nav auth={auth} user={user} />
      <section
        class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
        <div class="relative z-10">
          <div
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
              <defs>
                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                  patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
              </rect>
            </svg>
          </div>
        </div>
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Quick Booking
              <span class="text-blue-600"> For Your Favorite Destinations
              </span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              A more efficient method for locating accommodations for your destination.
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a class="relative" href="#">
                <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-600"></span>
                <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-400 hover:text-white">
                  Book Now
                </span>
              </a>
            </div>
          </div>
          <div class="relative mx-auto mt-10 max-w-lg">
            <img class="w-full rounded-2xl border border-gray-100 shadow" src="images/sll.jpg" alt="" />
          </div>
        </div>
      </section>


      <div className="m-4">
        <div className="grid grid-cols-3 gap-4">
          {currentHotels.map((hotel, index) => (
            <div key={hotel.hotel_id} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={hotel.photo1} alt={hotel.hotel_name} className='w-full' />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                    {hotel.hotel_name}
                  </h5>
                  <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-0.5 h-5 w-5 text-yellow-700">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                    </svg>
                    {hotel.star_rating}
                  </p>
                </div>
                <div className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-24 overflow-hidden">
                  {hotel.overview}
                  {hotel.overview.length > 100 && <span>...</span>}
                </div>
                <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                  {hotel.addressline1 && (
                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                      <span class="text-xs font-normal leading-none max-w-full flex-initial">{hotel.addressline1}</span>
                    </div>
                  )}
                  {hotel.state && (
                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                      <span class="text-xs font-normal leading-none max-w-full flex-initial">{hotel.state}</span>
                    </div>
                  )}
                  {hotel.country && (
                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                      <span class="text-xs font-normal leading-none max-w-full flex-initial">{hotel.country}</span>
                    </div>
                  )}
                  <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                    <span class="text-xs font-normal leading-none max-w-full flex-initial">Number of Reviews: {hotel.number_of_reviews}</span>
                  </div>
                  <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                    <span class="text-xs font-normal leading-none max-w-full flex-initial">Continent: {hotel.continent_name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">

                <div class="flex flex-wrap justify-center gap-6">
                  <a class="relative" href="#">
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-800"></span>
                    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-400 hover:text-white">
                      Book Now
                    </span>
                  </a>
                  <a href="#" class="relative">
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                      See More Details
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>



      <ul className="flex justify-center m-4">
        <li>
          <button className="h-8 px-5 text-gray-400 font-bold transition-colors duration-150 bg-white border border-r-0 border-gray-500 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={prevPage} 
            disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button className="h-8 px-5 text-indigo-600 font-bold transition-colors duration-150 bg-white border border-r-0 border-gray-500 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(hotels.length / hotelsPerPage)}>
            Next
          </button>
        </li>
      </ul>

      <Footer />
    </>
  );
}

export default Hotels;
