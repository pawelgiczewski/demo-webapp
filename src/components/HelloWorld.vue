<template>
<Card style="width: 70rem; margin: auto">
    <template #title>
        <img alt="Vue logo" src="./../assets/logo.png">
        <p>{{ msg }}</p>
    </template>
    <template #content>
      <Button icon="pi pi-globe" class="p-button-rounded p-button-secondary p-button-outlined" label="Ask server for random cat fact" v-on:click="setRandomCatFact"/>
      <p><ProgressSpinner v-show="loading" style="width:50px;height:50px" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/></p>
      <Message v-for="fact of catFacts" :key="fact" severity="success">{{ fact }}</Message>
    </template>
    <template #footer>
      <Divider></Divider>
      <h3>Credits</h3>
      <div>Check out <a href="https://github.com/pawelgiczewski/demo-webapp" target="_blank">the repository on GitHub</a>.</div>
      <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Demo app uses 3rd party API - <a href="https://alexwohlbruck.github.io/cat-facts/" target="_blank">https://alexwohlbruck.github.io/cat-facts/</a>.</div>
    </template>
</Card>
</template>

<script>
import { ApiService } from '../services/ApiService';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      catFacts: []
    }
  },
  methods: {

    setRandomCatFact() {
      const apiService = new ApiService();
      this.loading = true
      apiService.getRandomCatFact().then( res => {
        this.loading = false;
        const truncated = this.truncateCatFact(res.data.text);
        this.catFacts.push(truncated)
      })
    },

    truncateCatFact(text) {
      const maxSize = 120;
      if (text.length > maxSize) {
        return text.substring(0, maxSize - 3).concat('...');
      } else {
        return text;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
