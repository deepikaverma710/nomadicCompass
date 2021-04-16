import React, {useContext} from 'react';
import { Redirect,Route, Switch} from 'react-router-dom'
import {firebaseAuth} from './context/ContextIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Details from './pages/productDetails/Details';
import Cart from './pages/cart/Cart';

import HomePage from './pages/homepage/HomePage';

import Summary from './pages/packageSummary/Summary';



function PrivateRoute({component: Component, token, ...rest}) {
  return(
  <Route
  {...rest}
  render={(props) => token != null  
    ? <Component {...props} {...rest} />
    : <Redirect to ='/login' />} />
  )
}

function App() {
const { token } = useContext(firebaseAuth)
console.log(token)

return (
<Switch>
  <PrivateRoute exact path='/' component = {HomePage} token={token} />
  <Route exact path='/register' component={Register} />
  <Route exact path='/login' component={Login} />

  <Route exact path='/:selectedActivity/:selectedDestination/:selectedPackage' component={Details} />

  <Route exact path='/summary' component={Summary} />
  <Route exact path='/cart' component={Cart} />

  </Switch>
  );
}

export default App;
