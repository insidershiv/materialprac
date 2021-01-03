import React from 'react'
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    
<ThemeProvider theme={theme}>
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" component={()=> <div> Home </div> } />
    <Route exact path="/services" component={()=> <div> Services </div> } />
    <Route exact path="/customsoftware" component={()=> <div> Customer Software </div> } />
    <Route exact path="/mobileapps" component={()=> <div> Mobile Apps </div> } />
    <Route exact path="/websites" component={()=> <div> Website </div> } />
    <Route exact path="/revolution" component={()=> <div> The Revolution </div> } />
    <Route exact path="/about" component={()=> <div> About US </div> } />
    <Route exact path="/contact" component={()=> <div> contact us </div> } />
    <Route exact path="/estimate" component={()=> <div> Estimate </div> } />
    </Switch> 
  
  </BrowserRouter>


</ThemeProvider>

   
    );
}

export default App;