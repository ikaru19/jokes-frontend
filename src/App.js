import React, { Component } from 'react';
import {Header, Footer, Tabs, Card} from './components/layout';
// import {Body} from 'native-base';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tabs></Tabs>
        {/* <Sidebar></Sidebar> */}
        <body>
          <br/>
        <Grid container>
        <Grid item xs={4}>
          <Card></Card>
        </Grid>
        <Grid item xs={4}>
          <Card></Card>
        </Grid>
        <Grid item xs={4}>
          <Card></Card>
        </Grid>
        </Grid>
        <Footer/>
        </body>
      </div>
    );
  }
}

export default App;
