import { config } from '@vue/test-utils';

config.global.mocks = {
  $t: key => key  // Mock global pour les traductions, si vous utilisez vue-i18n ou similaire
};