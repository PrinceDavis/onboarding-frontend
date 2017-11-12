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
      options: {
        title: {
          text: 'Temper User Onboarding flow'
        },
        xAxis: {
          categories: [
            '0', 'Create Account', 'Activate Account', 'Profile Infomation', 'Interest', 'Has Exprience', 'A Freelancer', 'Waiting Approval', 'Approved']
        },
        yAxis: {
          title: {
            text: 'Percentage of user'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticlalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },
        series: []
      }
    }
  },

  beforeMount () {
    this.fetch()
      .then(data => {
        this.options.series = [
          { name: 'Week1 Cohort', data: [100].concat(this.cohorts.week1) },
          { name: 'Week2 Cohort', data: [100].concat(this.cohorts.week2) },
          { name: 'Week3 Cohort', data: [100].concat(this.cohorts.week3) },
          { name: 'Week4 Cohort', data: [100].concat(this.cohorts.week4) }
        ]
      })
      .catch(err => {
        console.log(err)
        alert('Can not fetch data at the moment!')
      })
  },

  computed: {
    ...mapGetters({
      cohorts: 'cohort/all'
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
