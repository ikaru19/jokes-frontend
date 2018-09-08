import React, { Component } from 'react';
import {Header, Footer, Tabs, Card} from './components/layout';
// import {Body} from 'native-base';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tabs></Tabs>
        {/* <Sidebar></Sidebar> */}
        <body>
        <Card/>
        <br/>
        <Card/>
        <Card/>
        <Footer/>
        </body>
      </div>
    );
  }
}

export default App;
