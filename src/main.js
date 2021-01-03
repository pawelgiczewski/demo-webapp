import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Message from 'primevue/message';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.component('Message', Message);
app.component('Button', Button)

app.mount('#app');
