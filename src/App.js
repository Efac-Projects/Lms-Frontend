import { useEffect, useState } from 'react';
import studentService from './services/student.service';

const App = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    studentService
      .getAll()
      .then((response) => {
        console.log('printing students', response.data);
        setStudent(response.data);
      })
      .catch((error) => {
        console.log('There is error', error);
      });
  }, []);

  return (
    <div>
      <h3>Student Database</h3>
      <div>
        <table border='1' cellPadding='10'>
          <tr>
            <td>Name</td>
            <td>Department</td>
            <td>Email</td>
          </tr>
          {students.map((student) => {
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
            </tr>;
          })}
        </table>
      </div>
    </div>
  );
};

export default App;
