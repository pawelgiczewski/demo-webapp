<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button icon="pi pi-globe" class="p-button-rounded p-button-secondary p-button-outlined" label="Ask server for random cat fact" v-on:click="setRandomCatFact"/>
    <Message severity="success" v-show="isMessageDisplayed">{{ randomCatFact }}</Message>

    <h3>Credits</h3>
    <div>Check out <a href="https://github.com/pawelgiczewski/demo-webapp" target="_blank">the repository on GitHub</a>.</div>
    <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Demo app uses 3rd party API - <a href="https://alexwohlbruck.github.io/cat-facts/" target="_blank">https://alexwohlbruck.github.io/cat-facts/</a>.</div>
  </div>
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
      isMessageDisplayed: false,
      randomCatFact: ''
    }
  },
  methods: {
    async setRandomCatFact() {
      const fullCatFact = await this.getRandomCatFactFromService();
      this.randomCatFact = this.truncateCatFact(fullCatFact);
      this.displayMessage();
    },

    async getRandomCatFactFromService() {
      const apiService = new ApiService();
      return (await apiService.getRandomCatFact()).data.text;
    },

    truncateCatFact(text) {
      const maxSize = 120;
      if (text.length > maxSize) {
        return text.substring(0, maxSize - 3).concat('...');
      } else {
        return text;
      }
    },

    displayMessage() {
      this.isMessageDisplayed = true;
    },

    hideMessage() {
      this.isMessageDisplayed = false;
    }
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
