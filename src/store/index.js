import {reactive,readonly} from 'vue'

 const state=reactive({
    counter:20,
    color:'grey'
})

const methods={
incrementCounter(){
   state.counter++ 
},
decrementCounter(){
    state.counter-- 
 },
 setColorCode(payload){
    state.color=payload

}
}

const getters={
    counterSquared(){
        return state.counter * state.counter
      }
}


export default{
    state:readonly(state),
    methods,
    getters
}