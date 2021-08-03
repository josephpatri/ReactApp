import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import rutas from './RouteConfig';
import Menu from './Utils/Menu';
import configurarValidaciones from './Validaciones';

configurarValidaciones();

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            {rutas.map(ruta =>
              <Route key={ruta.path}
                path={ruta.path} exact={ruta.exact}>
                <ruta.componente />
              </Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
