import React, { PureComponent } from 'react';
import { Route } from 'react-router' 
import { BrowserRouter  } from 'react-router-dom'

import Main from './components/Main'

class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter >
           <Route exact path="/" component={Main}/>
        </BrowserRouter>
      </div>
    )
  }
}

export { App };
