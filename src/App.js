import React, { PureComponent } from 'react';

import Main from './components/Main'

const increment = (num) => num + 1


class App extends PureComponent {
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export { App, increment };
