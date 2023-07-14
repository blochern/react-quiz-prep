import React, { useState, useEffect } from "react"
import Users from "./Users";

function App() {
  // initialize users state (and setUsers function)
  const [users, setUsers] = useState([]);

  // useEffect that runs as soon as the App is loaded
  useEffect(() => {
    // async callback function that will hold our fetch request
    const executeFetch = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      }

      catch (err) { console.error(err.message); }
    }

    // immediately invoke our executeFetch
    executeFetch();
  }, [])

  // Instructions:
  // 1. Use a react hook to create some state called users with an initial value of an empty Array.
  // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
  // 3. Use a hook to make the API request when the app loads. 
  // 4. Create Users and UserItem components
  // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
  // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID
  return (
    <div className="container">
      {/* returns a Users component with state passed in */}
      <Users
        users={users}
      />
    </div>
  )
}

export default App
