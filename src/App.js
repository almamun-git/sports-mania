import './App.css';
import Clubs from './Components/ClubInfo/Clubs/Clubs';
import LeaguesRender from './Components/LeagueInfo/Leagues/LeaguesRender/LeaguesRender';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetails from './Components/LeagueInfo/LeagueDetails/LeagueDetails';


function App() {
  return (
    <div className="App">
      <Navbar className = "navBarr">
        <Navbar.Brand style = {{color: "#ffff"}} href="#home">Navbar</Navbar.Brand>
        <Navbar.Brand style = {{color: "#ffff"}} className="mr-auto" href="#home">Home</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <LeaguesRender></LeaguesRender>
          </Route>
          <Route path = '/league/:leagueID'>
            <LeagueDetails></LeagueDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
