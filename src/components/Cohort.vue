<template>
  <div class="cohort">
    <h2>Retention Analysis</h2>
    <highcharts :options="options"></highcharts>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      options: {}
    }
  },

  beforeMount () {
    this.fetch().then(data => {
      console.log(data)
    }).catch(err => console.log(err))
  },

  computed: {
    ...mapGetters({
      all: 'cohort/all'
    })
  },

  methods: {
    ...mapActions({
      fetch: 'cohort/fetchCohorts'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
