import Vue from 'vue';
import Intro from "~/components/Intro.vue"
Vue.component('intro', Intro)

Vue.filter('upperFirst', (value) => {
    return value.toString().charAt(0).toUpperCase() + value.slice(1)
})