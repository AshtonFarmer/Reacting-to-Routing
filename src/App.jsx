import React from 'react';
import Films from './components/Films';
import Navbar from './components/NavBar';
import People from './components/People';
import './components/styles';



const App = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:filmid">
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:peopleid">
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };

export default App;