import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsDesign from './NewsDesign';
import Loader from 'react-js-loader';

function News(props) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getApiData(currentPage);
  }, [currentPage, props.category,props.searchWord]);

  const getApiData = (page) => {
    setIsLoading(true);
    const apiKey = "b35739c7bfe94f6aba5aafe7ac8c73a0";
    axios.get(`https://newsapi.org/v2/top-headlines?q=${props.searchWord}&pagesize=${16}&category=${props.category}&country=in&page=${page}&apiKey=${apiKey}`)
      .then((res) => {
        if (res && res.data && res.data.articles) {
          setApiData(res.data.articles);
          setTotalPages(Math.ceil(res.data.totalResults / 10)); 
        }
      })
      .catch((err) => console.log("err===>", err))
      .finally(() => {
        setIsLoading(false); 
      });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='testy'>
      {isLoading ? (
        <Loader
        type="skeleton-circle" bgColor={'black'} color={'black'} title={"𝙡𝙤𝙖𝙙𝙞𝙣𝙜..."} size={77}
        />
      ) : (
        <>
      <NewsDesign apiData={apiData} />
      <div className="pagination-container">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-button btn btn-primary"
        >
          Previous
        </button>
        <span className="pagination-info">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-button btn btn-primary"
        >
          Next
        </button>
      </div>
      </>
      )}
    </div>
  );
}

export default News;
