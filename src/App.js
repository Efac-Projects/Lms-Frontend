import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={StudentList} />
            <Route path='/add' component={AddStudent} />
            <Route path='/students/edit/:id' component={AddStudent} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
