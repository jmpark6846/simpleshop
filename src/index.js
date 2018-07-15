import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/App';
import store from './store';

if(process.env === 'production'){
  ReactDOM(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}else{

  const render = Component =>
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );

  render(App);

  // Webpack Hot Module Replacement API 부분
  if (module.hot) module.hot.accept('./components/App', () => render(App));
}