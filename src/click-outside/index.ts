import ClickOutside from './ClickOutside';
import { App } from 'vue';

export { ClickOutside };

export default {
  install(app: App) {
    app.directive('click-outside', ClickOutside);
  },
};
