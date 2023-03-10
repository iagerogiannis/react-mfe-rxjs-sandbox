import { createApp } from 'vue';
import App from './App.vue';

// Mount function to start up the app
const mount = (el, { countStore }) => {
  const app = createApp(App, { countStore });
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_container-vue-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
