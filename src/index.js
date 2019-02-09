import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogoAnime from './LogoComponent/LogoAnime';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LogoAnime/>, document.getElementById('root'));
registerServiceWorker();
