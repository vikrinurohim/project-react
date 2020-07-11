import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Home from './Home'
import Conversi from './Conversi'
import Product from './Product'
import Videos from './Videos'
import LogIn from './LogIn'
class NavBar extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar"><h1 className="judul">Literature....</h1>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/conversi">Conversi</Link></p>
                <p><Link to="/product">Product</Link></p>
                <p><Link to="/videos">Videos</Link></p>
                <p><Link to="/login">Log-In</Link></p>
                <hr></hr>
                </div>
              <React.Fragment>
                  <Route path="/" exact component={Home} />
                  <Route path="/conversi" component={Conversi} />
                  <Route path="/product" component={Product} />
                  <Route path="/videos" component={Videos} />
                  <Route path="/login" component={LogIn} />
              </React.Fragment>
            </Router>
            
        )
    }
}
export default NavBar