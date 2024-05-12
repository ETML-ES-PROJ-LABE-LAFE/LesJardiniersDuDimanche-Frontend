
import LotsView from '@/views/LotsView.vue';
import {shallowMount} from "@vue/test-utils";

describe('LotsView', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(LotsView, {
      global: {
        stubs: ['SearchBar', 'FilterCategorie', 'FilterSubCategorie', 'LotList', 'SearchBarNoResults']
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});