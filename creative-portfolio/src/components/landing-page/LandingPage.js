import React, {Component} from 'react';
import Navbar from './Navbar';
import { Header } from './Header';

class LandingPage extends Component {
  render(){
    return(
      <section>
        <Navbar/>
        <Header/>
      </section>
    )
  }
}

export default LandingPage;