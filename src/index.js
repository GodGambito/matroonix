import React from 'react';
import ReactDOM from 'react-dom';
// import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';
import UnderConstruction from './pages/UnderConstruction';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        {/* <SimpleReactLightbox>
            <App />*/}
            <UnderConstruction />
        {/* </SimpleReactLightbox> */}
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
