import './App.css';
import LeaguesRender from './Components/LeagueInfo/Leagues/LeaguesRender/LeaguesRender';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetails from './Components/LeagueInfo/LeagueDetails/LeagueDetails';
import ClubRender from './Components/ClubInfo/ClubRender/ClubRender';
import ClubDetails from './Components/ClubInfo/ClubDetails/ClubDetails';


function App() {
  return (
    <div className="App">
      <Navbar className = "navBarr">
        <Navbar.Brand style = {{color: "#ffff"}} href="/">League</Navbar.Brand>
        <Navbar.Brand style = {{color: "#ffff"}} className="mr-auto" href="/club">Team</Navbar.Brand>
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
          <Route path = '/club'>
            <ClubRender></ClubRender>
          </Route>
          <Route path = '/team/:teamID'>
            <ClubDetails></ClubDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
