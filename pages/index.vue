<template>
    <div>
      <intro>
        {{'the home Page' | upperFirst}}
      </intro>
      <section class="menu-section">
            <div class="section-header">
                <img src="~assets/images/nuxtjs_logo.png" style="    max-height: 70px;" alt="Resturant-logo">
                <h3>TODAY’S MENU </h3>
            </div>
            <div class="menu">
                <RecipieList :recipieList=recipies />
            </div>

      </section>

    </div>
</template>

<script>

import RecipieList from "~/components/Menu/RecipieList.vue"

export default {

    components: { RecipieList },
    //this.$store
    computed:{
      recipies(){
        return this.$store.getters.recipies;
      }
    }

}
</script>

<style scoped>


</style>
