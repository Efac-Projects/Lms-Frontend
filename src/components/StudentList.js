import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../services/student.service';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const init = () => {
    studentService
      .getAll()
      .then((response) => {
        console.log('printing students', response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.log('There is error', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    studentService
      .remove(id)
      .then((response) => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('There is an error', error);
      });
  };

  return (
    <div className='container'>
      <h3>List of Students</h3>
      <hr />
      <div>
        <Link to='/add' className='btn btn-primary mb-2'>
          Add Student
        </Link>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/students/edit/${student.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(student.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
