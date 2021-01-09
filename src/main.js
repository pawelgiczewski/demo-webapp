import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Message from 'primevue/message';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.component('Message', Message);
app.component('Button', Button);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Dialog', Dialog);

app.mount('#app');
