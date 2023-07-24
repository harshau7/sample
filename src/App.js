import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [departmentData, setStudents] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        // const arr=response.data.students.toArray();
        console.log(response.data[0]);
        setStudents(response.data);
      })
  }, []);

  return (
    <div>
      {departmentData  && departmentData.map(department => (
        <div key={department._id.$oid}>
          {/* <h2>Department: {department.department}</h2> */}
          {/* <h3>Students:</h3> */}
          <ul>
            {   department.students.map((student, index) => (
               student.age===20 && <li key={index} >
                <strong>Department:</strong> {department.department}
                <strong>Name:</strong> {student.name},{' '}
                <strong>Age:</strong> {student.age},{' '}
                <strong>Gender:</strong> {student.gender}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
