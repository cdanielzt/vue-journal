<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entradas">
        </div>

        <div class="entry-scrollarea">
            <Entry
              v-for="item in 100"
              :key="item"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Entry: defineAsyncComponent(() => import('./Entry')),
    }
}
</script>

<style lang="scss" scoped>
input {
    height: 30px;
}
.entry-list-container {
    border-right: 1px solid #2C3E50;
    height: calc( 100vh - 56px );
}

.entry-scrollarea {
    height: calc( 100vh - 115px );
    overflow-y: auto;
}
</style>