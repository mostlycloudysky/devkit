import React, { useState, useEffect } from 'react';
import AwsCards from '../AwsCards';
import Pagination from '../Pagination';

function Aws() {
  const [awsBlogs, setAwsBlogs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];

  for (let i = 1; i <= Math.ceil(100 / itemsPerPage); i++) {
    pages.push(i);
  }

  console.log('Total page navigation', pages);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          className={`flex flex-row items-center ${
            currentPage == number ? 'active' : null
          }`}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://djawhtqabb.execute-api.us-east-1.amazonaws.com/Prod/awsblogs?page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAwsBlogs(data); // Set the toDo variable
        setIsLoading(false);
      });
  }, [currentPage]);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
  }

  if (isLoading) {
    return (
      <>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='loader bg-black p-5 rounded-full flex space-x-3'>
            <div className='w-5 h-5 bg-blue-600 rounded-full animate-bounce'></div>
            <div className='w-5 h-5 bg-cyan-600 rounded-full animate-bounce'></div>
            <div className='w-5 h-5 bg-gray-100 rounded-full animate-bounce'></div>
          </div>
        </div>
      </>
    );
  }
  if (!awsBlogs) {
    return <p>No List to show</p>;
  }

  return (
    <>
      {/* <h1>TODO List</h1>
        <ul>
            {toDos.map( toDo =>
                <li key={toDo.id}>
                    {toDo.title} - <span>( {toDo.completed ? 'Completed' : 'Not Completed'} )</span>
                </li>
            )}
        </ul> */}

      <AwsCards blogs={awsBlogs.data} />
      <Pagination />
      <div className='flex space-x-4 items-center cursor-pointer text-2xl'>
        <li className=' flex'>
          <button
            onClick={handlePrevBtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li className=' flex'>
          <button
            onClick={handleNextBtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </div>
      <div className=' flex justify-center items-center'>
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    </>
  );
}

export default Aws;
