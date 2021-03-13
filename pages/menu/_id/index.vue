<template>
<section>
            <div class="section-header">
                <h3>Recipie Details</h3>
            </div>
            <div class="recipie-details ">
                <div class="Media">
                    <img class="Media-figure" :src="require('~/assets/images/'+menuItem.image)" alt="">
                    <div class="Media-body">
                        <h3 class="Media-title">
                            <nuxt-link :to="'/menu/'+menuItem.id">{{menuItem.title}}</nuxt-link>

                            <strong>{{menuItem.price}}$</strong>
                        </h3>
                        <ul class="ingredients">
                            <li v-for="(ing,i) in menuItem.ingredients" :key="i">-{{ingredients[ing]}}</li>
                        </ul>
                    </div>
    </div>
            </div>

        </section>


</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            menuItem:{},
            ingredients:['tomato','potato']
        }
    },

   asyncData(context){
     return axios.get(process.env.baseurl +'/menuList/'+context.params.id+'.json')
     .then(res => {
        //merge
        context.app.$toast.success('success')
        return {menuItem:{...res.data,image:res.data.thumbnail}}
     })
     .catch(err => {
        //  context.error(err)
        context.app.$toast.error('Error while authenticating')
     })
   }
}
</script>
<style scoped>
.recipie-details {
            display: flex;
            justify-content: center;
        }

        .section-header {
            text-align: center;
        }

        .Media {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
        }

        .Media-figure {
            margin-right: 1em;
            height: 100%;
            width: 300px;
        }

        .Media-title {
            margin-top: 0;
        }

        .Media-title strong {
            float: right;
            color: #ff3030;
            margin-right: 1rem;
        }

        .ingredients {
            list-style: none;
            padding: 0;
        }

        .ingredients li {
            width: 50%;
            float: left;
        }


</style>