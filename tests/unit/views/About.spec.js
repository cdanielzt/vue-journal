import { shallowMount } from "@vue/test-utils";
import About from '@/views/About'

describe('Pruebas en el About view', () => {
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallowMount(About)
        expect( wrapper.html() ).toMatchSnapshot();
    })
});