import React, { useState, useEffect } from 'react';

function UserRecords() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      setUserData(data.users);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt="User Image" width="100" height="100" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRecords;