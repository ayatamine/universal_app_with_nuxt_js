<template>
    <div>
      <Intro>
       Our Menu
      </Intro>
      <section class="menu-section">
            <div class="section-header">
                <img src="~assets/images/nuxtjs_logo.png" style="    max-height: 70px;" alt="Resturant-logo">
                <h3>TODAY’S SPECIALS
 </h3>
            </div>
            <div class="menu">

                 <MenuList :menuList=menuItems />
            </div>




      </section>

    </div>
</template>

<script>

import Intro from "~/components/Intro.vue"
import MenuList from "~/components/Menu/MenuList.vue"

export default {

    asyncData(context){
      // callback(null,{
      //   menuItems:[
      //               {
      //                 title:"menuitem 1",
      //                 id:1,
      //                 image : 'menu_style_two_1.jpg',
      //                 price:100,
      //                 ingredients:[
      //                   "tomato",
      //                   "potato"
      //                 ]
      //               },
      //               {
      //                 title:"menuitem 2",
      //                 id:2,
      //                 image : 'menu_style_two_2.jpg',
      //                 price:200,
      //                   ingredients:[
      //                   "tomato",
      //                   "potato"
      //                 ]
      //               },
      //           ]
      // });

      return new Promise((resolve,reject)=>{
        resolve({MenuList:[
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
                ]})
                .then(data =>{
                  context.store.dispatch('setMenuList',data.menuList)
                })
      })
    },
  components: {
    Intro ,MenuList}
}
</script>

<style scoped>




</style>
