import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Containers/PostDetails/PostDetails';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
     <Home></Home>
        </Route>
        <Route path="/post/:postID">
        <PostDetails></PostDetails>
        </Route>
        <Route path="/dashboard">
       
        </Route>
      </Switch>
    </div>
  </Router>
  )

}

export default App;
