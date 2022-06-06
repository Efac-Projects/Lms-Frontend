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
      <div className='mt-5'>
        <h3>Student Management System</h3>
      </div>
      <hr />
      <div>
        <Link to='/add' className='btn btn-primary mb-2 btn-dark'>
          Add Student
        </Link>
        <table className='table table-bordered table-striped table-hover'>
          <thead className='thead-dark table-striped '>
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
                    className='btn btn-info btn-dark'
                    to={`/students/edit/${student.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className='btn ml-2 btn-secondary'
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
