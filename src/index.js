import React from 'react';
import ReactDOM from 'react-dom';

// import './assets/js/jquery-3.4.1.min.js'
// import './assets/js/popper.min.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/owl.carousel.min.js'
// import './assets/js/scrolltotop.js'
// import './assets/js/slicknav-min.js'
// import './assets/js/wow.min.js'
// import './assets/js/waypoints.min.js'
// import './assets/js/jquery.counterup.min.js'
// import './assets/js/jquery.magnific-popup.js'
// import './assets/js/jquery.sticky.js'
// import './assets/js/contact-form-script.js'
// import './assets/js/jquery.ajaxchimp.js'
// import './assets/js/smooth-scroll.min.js'
// import './assets/js/main.js'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
