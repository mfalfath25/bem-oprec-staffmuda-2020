import React, { useContext } from 'react';

//import config
import { Nodux } from './Config/Context/';

//import components
import { About, Home, Login, Main } from './Container/Pages';
import { Navbar, Footer } from './Container/Organism'
import { Route, Switch, Redirect } from 'react-router-dom';

//for private route
const PrivateRoute = ({ component: Component, status: isLogged, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogged === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)

function App() {
  const [state] = useContext(Nodux.AuthContext);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/main/:kondisi" component={Main} status={state.isLogged} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
