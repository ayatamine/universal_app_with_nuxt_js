<template>
     <div class="Media">
                    <img class="Media-figure" :src="image" alt="">
                    <div class="Media-body">
                        <h3 class="Media-title">
                            <nuxt-link :to="'/menu/'+id">{{title}}</nuxt-link>

                            <strong>{{price}}$</strong>
                        </h3>
                        <ul class="ingredients">
                            <li v-for="(ing,i) in ingredients" :key="i">-{{ing}}</li>
                        </ul>
                    </div>
    </div>
</template>
<script>
export default {
 props:{
     title:{
         required:true,
         type:String
     },
     image:{
         required:true,
         type:String
     },
     id:{
         required:true,
         type:String
     },
     price:{
         required:true,
         type:Number
     },
     ingredients:{
         type:Array,
         required:true
     }
 }
}
</script>
<style scoped>
.Media {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
                min-width: 31%;
        }

        @media (min-width) {
            .Media {
                width: 40%;
            }
        }

        .Media-figure {
            margin-right: 1em;
        }

        .Media-body {
            flex: 1;
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