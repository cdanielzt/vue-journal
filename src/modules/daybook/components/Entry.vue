<template>
  <div 
    class="entry-container mb-2 p-2 pointer"
    @click="$router.push({name: 'entry', params: {id: 10}})"
  >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">19</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-1 fw-light">2022, Viernes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, cupiditate. Vel natus esse ipsam voluptatum nobis quibusdam animi repellendus dolorum ut quis maiores blanditiis sed minus velit deserunt, quos dolorem.
        </div>
  </div>
</template>



<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #e6e6e6;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}


</style>