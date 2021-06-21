import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module'
import './i18n';
import Loader from './components/Loader';
import { HelmetProvider } from 'react-helmet-async';

const tagManagerArgs = {
  gtmId: 'GTM-KD8TCG4'
}

window.onload = () => {
  // When page loading is complete we call the google analytics method optimizing load time
  TagManager.initialize(tagManagerArgs)
}

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<Loader />}>
      <App />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
