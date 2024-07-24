import './App.css';
import LogIn from './components/login';
import Signup from './components/signup';
import {BrowserRouter as Router , Route,Link,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LogIn/>} />
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
