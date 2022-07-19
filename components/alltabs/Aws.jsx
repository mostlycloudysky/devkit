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
        console.log('respone data', data);
        setAwsBlogs(data); // Set the toDo variable
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);

  // }, [])

  if (isLoading) {
    return <p>Loading....</p>;
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

      <AwsCards />
    </>
  );
}

export default Aws;
