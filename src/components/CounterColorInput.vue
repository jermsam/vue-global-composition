<template>
    <p>
     <input 
     style="text-align:center; outline:none; color:green;"
      placeholder="set counter color"
      v-model="colorCode"
      />
    </p>
</template>

<script>
import {inject,computed} from 'vue'



export default {

 setup() {
   const store=inject('store')

const colorCode=computed({
      get(){
      
      return store.state.color;
    },
    set(newColor){
store.methods.setColorCode(newColor)

    }
    })

   return{
     store,
     colorCode
   }
 },

   
}
</script>
