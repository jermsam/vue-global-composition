<template>
     <div :style="{color:store.state.color}">
   {{store.state.counter}}
   <div>
  {{store.state.counter}}<sup>2</sup>
    = {{store.getters.counterSquared()}}
   </div>
  
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