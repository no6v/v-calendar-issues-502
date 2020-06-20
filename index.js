import "regenerator-runtime/runtime"
import Vue from 'vue/dist/vue.esm'
import VCalendar from 'v-calendar'
Vue.use(VCalendar)

export default new Vue({
  template: `<div>
  <v-date-picker v-model="date" is-inline></v-date-picker>
  {{date}}
  </div>`,

  data(){
    return {
      date: null,
    }
  },
}).$mount('#app')
