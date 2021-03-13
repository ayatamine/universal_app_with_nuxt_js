<template>
    <div>
                <Recipie
                  v-for="recipie in recipieList"
                  :key="recipie.id"
                  :title="recipie.title"
                  :image="require('~/assets/images/'+recipie.image)"
                  :id="recipie.id"
                  :price="recipie.price"
                 />
    </div>
</template>
<script>
import Recipie from "~/components/Menu/Recipie.vue"
export default {
components: {
     Recipie },
     props:{
         recipieList:{
             type:Array,
             required:true
         }
     }
}
</script>
<style>
.menu > div {
            display: flex;
            padding: 20px;
            box-sizing: border-box;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .menu-section {
            padding-top: 1rem;
        }

        .section-header {
            text-align: center;
        }

        .section-header h3 {
            color: #212324;
            font-size: 40px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin: 0.5rem auto;
        }

</style>