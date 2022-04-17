import { shallowMount } from "@vue/test-utils";
import Fab from '@/modules/daybook/components/Fab.vue'

describe('pruebas en el FAB component', () => {

    test('debe de mostrar el icono por defecto', () => { 
        const wrapper = shallowMount(Fab)
        expect(wrapper.find('i').classes('fa-plus')).toBe(true)
    })

    test('debe de mostrar el icono por argumento fa-circle', () => { 
        const wrapper = shallowMount(Fab,{
            props: {
                icon: 'fa-floppy-disk'
            }
        })
        expect(wrapper.find('i').classes('fa-floppy-disk')).toBe(true)
    })

    test('debe de emitir el evento on:click cuando se hace click', () => { 
        
        const wrapper = shallowMount(Fab)
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted('on:click')).toBeTruthy()
    })

})