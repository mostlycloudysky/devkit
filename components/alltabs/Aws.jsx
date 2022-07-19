import React, { useState, useEffect } from 'react';
import AwsCards from '../AwsCards';

function Aws() {
  const [awsBlogs, setAwsBlogs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://djawhtqabb.execute-api.us-east-1.amazonaws.com/Prod/awsblogs?page=1'
    )
      .then((response) => response.json())
      .then((data) => {
        setAwsBlogs(data); // Set the toDo variable
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <div className='flex items-center justify-center space-x-2 animate-bounce mt-5'>
          <div className='w-8 h-8 bg-blue-400 rounded-full'></div>
          <div className='w-8 h-8 bg-green-400 rounded-full'></div>
          <div className='w-8 h-8 bg-black rounded-full'></div>
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
    </>
  );
}

export default Aws;
