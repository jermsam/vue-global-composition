<template>
       <div class="counter-controls">
   <button @click="store.methods.decrementCounter">
   -
   </button>
   <button @click="store.methods.incrementCounter">
  +
   </button>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
  name: 'CounterButtons',
 
 setup() {
   const store=inject('store')



   return{
     store,
   }
 }
}
</script>

<style scoped>
 button {
  width:5rem;
  padding:1rem;
  margin: 0 10px;
}
</style>