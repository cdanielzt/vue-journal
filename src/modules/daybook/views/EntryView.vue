<template>
    <template v-if="entry">

        <div class="entry-title d-flex justify-content-between p-2">

            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <button 
                    v-if="entry.id"
                    @click="onDeleteEntry"
                    class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary mx-2">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>

        <div class="d-flex flex-column px-3 h-75">
            <textarea 
            v-model="entry.text"
            placeholder="¿Qué sucedió hoy?"></textarea>
        </div>


        <Fab 
            icon="fa-floppy-disk"
            @on:click="saveEntry"
        />
    </template>

  <img 
    src="https://definicion.de/wp-content/uploads/2008/09/campo-1.jpg" 
    alt="entry picture"
    class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex'

import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            entry: null
        }
    },

    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

    computed: {
        ...mapGetters('journal',[ 'getEntryById' ]),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },

    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

        async saveEntry() {
            if( this.entry.id ){
                await this.updateEntry(this.entry)
                this.$router.push({name: 'entry', params: { id: this.entry.id }})

            } else {
                const id = await this.createEntry(this.entry);
                this.$router.push({name: 'entry', params: { id }})

            }
        },

        async onDeleteEntry() {
            await this.deleteEntry(this.entry.id)
            this.$router.push({name: 'no-entry'})
        },
        
        loadEntry() {
            let entry;

            if( this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById(this.id)
                if( !entry )  return this.$router.push({name: 'no-entry'})
            }

            this.entry = entry
        },
    },

    watch: {
        id() {
            this.loadEntry()
        }
    },

    created() {
        this.loadEntry();
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 120px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>