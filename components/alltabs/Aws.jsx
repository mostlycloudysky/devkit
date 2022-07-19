import React, {useState, useEffect} from 'react'
import AwsCards from '../AwsCards'


function Aws() {

  const [toDos, setToDos ] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setToDos(data) // Set the toDo variable
                setIsLoading(false)
            })
  }, [])

  if (isLoading) {
    return <p>Loading....</p>
  }
  if (!toDos) {
    return <p>No List to show</p>
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
  )
}

export default Aws