import React, { useState, useEffect } from 'react';
import AwsCards from '../AwsCards';

function Aws() {
  const [awsBlogs, setAwsBlogs] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

  // https://upmostly.com/tutorials/react-infinite-scroll
  function handleScroll() {
    var isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      // Load next posts
      setCurrentPage(currentPage + 1);
    }
  }

  window.addEventListener('scroll', handleScroll);

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
      <AwsCards blogs={awsBlogs.data} />
    </>
  );
}

export default Aws;
