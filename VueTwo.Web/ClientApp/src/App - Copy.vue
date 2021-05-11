<template>
  <div class="p-d-block">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="p-d-flex p-jc-center">
      <div class="p-mr-2">
        <span class="p-float-label">
          <InputText tpye="text" id="name" v-model="name"/>
          <label for="name">Name</label>
        </span>
      </div>
      <div class="p-mr-2">
        <p>Has Name: {{ hasName }}</p>
        <p>Name: {{ name }}</p>
      </div>
      <div class="p-mr-2">
        <Button class="p-button" v-on:click="increment">Click Up</Button>
      </div>
      <div class="p-mr-2">
        <Button @click="decrement" label="Click Down"/>
      </div>
      <div class="p-mr-2">
        <p>{{ count }}</p>
      </div>
      <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>

    <div class="p-d-flex p-jc-center">
      <div id="watch-example">

        <p>
          Ask a yes/no question:
        </p>
      </div>
    </div>

    <div class="p-d-flex p-jc-center">
        <span class="p-float-label">
          <InputText type="text" id="question" v-model="question"/>
          <label for="question">Question</label>
        </span>
    </div>
    <div class="p-d-flex p-jc-center">
      <p>{{ answer }}</p>
    </div>

    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Vorname</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Benders</td>
        <td>Marcel</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      name: 'Marcel',
      count: 4,
    }
  },
  watch: {
    // Immer wenn question sich ändert, wird diese Funktion aufgerufen
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
      console.log(oldQuestion);
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const response = await axios.get('https://yesno.wtf/api')
        this.answer = response.data.answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
  ,
  computed: {
    hasName() {
      return this.name.length > 0 ? 'Ja' : 'Nein';
    }
  }
// components: {
//   HelloWorld
// }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
