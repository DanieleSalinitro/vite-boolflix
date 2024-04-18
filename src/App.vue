<template>
  <headerComponent />
</template>

<script>
import axios from 'axios'
import {store} from './store.js'
import headerComponent from './components/headerComponent.vue';
import mainComponent from './components/mainComponent.vue';
import cardComponent from './components/cardComponent.vue';
import cardListComponent from './components/cardListComponent.vue';
  export default {
    name: 'App', 
    components: {
      headerComponent,
      mainComponent
    }, 
    data() {
      return {
        store
      }
    }, 
    methods: {
      getMovies() {
        axios.get(this.store.apiUrl+this.store.endPoint.movie, this.store.options).then((res) => {
          console.log(res.data.results)
          this.store.movies = res.data.results

        })
      }, 
      getTV() {
        axios.get(this.store.apiUrl+this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results)
          this.store.tv = res.data.results
        })
      }
    }, 
    created() {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>