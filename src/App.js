import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/S-Solo/json-server-test/users')
      .then(res => res.json())
      .then(resJson => {
        setUsers(resJson);
      })
      .catch(err => {
        console.log('err: ', err);
      })


    fetch('https://my-json-server.typicode.com/S-Solo/json-server-test/users', {
      method: 'POST',
      body: JSON.stringify([
        {
          id: 1,
          "name": "John",
          "surname": "Doe",
          "age": 43
        },
        {
          id: 2,
          "name": "Johny",
          "surname": "Doe",
          "age": 50
        },
        {
          id: 3,
          "name": "Johan",
          "surname": "Doe",
          "age": 81
        }
      ])
    })
      .then(res => res.json())
      .then(resJson => {
        console.log('resJson: ', resJson);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [])


  return (
    <div className="App">
      {users && users.map(el => {
        return <span key={el.name}>el.name</span>
      })}
    </div>
  );
}

export default App;
