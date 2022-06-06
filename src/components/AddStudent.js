import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import studentService from '../services/student.service';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const saveStudent = (e) => {
    e.preventDefault();

    const student = { name, department, email, id };
    if (id) {
      //update
      studentService
        .update(student)
        .then((response) => {
          console.log('Student is updated', response.data);
          history.push('/');
        })
        .catch((error) => {
          console.log('something went wrong', error);
        });
    } else {
      //create
      studentService
        .create(student)
        .then((response) => {
          console.log('student added successfully', response.data);
          history.push('/');
        })
        .catch((error) => {
          console.log('something went wrong', error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      studentService
        .get(id)
        .then((student) => {
          setName(student.data.name);
          setEmail(student.data.email);
          setDepartment(student.data.department);
        })
        .catch((error) => {
          console.log('something went wrong', error);
        });
    }
  }, []);
  return (
    <div className='container'>
      <h3>Add Student</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='department'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder='Enter Department'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </div>
        <div>
          <button onClick={(e) => saveStudent(e)} className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to='/'>Back to List</Link>
    </div>
  );
};

export default AddStudent;
