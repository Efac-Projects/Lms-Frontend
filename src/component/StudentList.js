import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentService from '../services/student.service';

const StudentList = () => {
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
    <div className='container'>
      <h3>Student Database</h3>
      <hr />
      <div>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
