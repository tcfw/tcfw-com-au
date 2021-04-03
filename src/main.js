import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './icons.js';
import './styles.scss';

createApp(App)
	.component('FontAwesomeIcon', FontAwesomeIcon)
	.mount('#app');