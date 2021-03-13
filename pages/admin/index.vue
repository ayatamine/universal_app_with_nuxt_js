<template>
    <div>
        <div>
            <nuxt-link to="/admin/new-recipie">New Recipie</nuxt-link>
        </div>
        <div class="menu">

           <MenuList :menuList=menuItems />
        </div>
    </div>
</template>

<script>
import MenuList from "~/components/Menu/MenuList.vue"

export default {
 layout:'admin',
 data(){
      return {
        menuItems:[
                    {
                      title:"menuitem 1",
                      id:1,
                      image : 'menu_style_two_1.jpg',
                      price:100,
                      ingredients:[
                        "tomato",
                        "potato"
                      ]
                    },
                    {
                      title:"menuitem 2",
                      id:2,
                      image : 'menu_style_two_2.jpg',
                      price:200,
                        ingredients:[
                        "tomato",
                        "potato"
                      ]
                    },
                ]
      }
    },
    components:{
        MenuList
    }
}
</script>

<style>

</style>