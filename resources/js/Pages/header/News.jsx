import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';

const News = ({ auth, user }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/proxy-news');
        const { articles } = response.data;
        setArticles(articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <Nav auth={auth} user={user} />
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-white" >Top Headlines</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap -mx-5">
            {articles.map((article, index) => (
              <div className="w-full md:w-1/3 px-4 mb-8 " key={index}>
                <div className="bg-gray-400/80 rounded-lg overflow-hidden shadow-md text-black ">
                  <img src={article.image} className="w-full h-48 object-cover" alt={article.title} />
                  <div className="p-4">
                    <h5 className="text-xl font-semibold mb-2">{article.title}</h5>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-orange-600 transition duration-300">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> 
      <Footer />
    </>
  );
};

export default News;
