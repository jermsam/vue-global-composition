<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter msg="Welcome to Your Vue.js App">
     <template #buttons>
<counter-buttons/>
    </template>
    <template #colorPiker>
<counter-color-input/>
    </template>
    </Counter>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import CounterButtons from '@/components/CounterButtons.vue'
import CounterColorInput from '@/components/CounterColorInput.vue'


export default {
  name: 'Home',
  components: {
    Counter,
    CounterButtons,
    CounterColorInput,
  }
}
</script>
