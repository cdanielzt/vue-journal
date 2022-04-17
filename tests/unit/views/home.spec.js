import { shallowMount } from "@vue/test-utils";
import About from '@/views/About'
import Home from '@/views/Home'


describe('Pruebas en el About view', () => {

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallowMount(About)
        expect( wrapper.html() ).toMatchSnapshot();
    })

    test('hacer click en boton debe redireccionar a no-entry', () => {
        const mockRouter = {
            push: jest.fn()
        }
        const wrapper = shallowMount( Home, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        } )
        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({name: 'no-entry'})
    })
});