import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import StudentList from './component/StudentList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={StudentList} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
