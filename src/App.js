import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Overview from './components/Overview'
import InclusionsAndExclusions from './components/InclusionsAndExclusions'
import Itinerary from './components/Itinerary'

import CostsAndTerms from './components/CostsAndTerms'
import BookNow from './components/BookNow'

import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route exact path="/inclusions" component={InclusionsAndExclusions} />
      <Route exact path="/itinerary" component={Itinerary} />
      <Route exact path="/costs" component={CostsAndTerms} />
      <Route exact path="/booknow" component={BookNow} />
    </Switch>
  </BrowserRouter>
)

export default App
