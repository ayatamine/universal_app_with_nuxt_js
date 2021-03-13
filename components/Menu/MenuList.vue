<template>
    <div>
        <MenuItem
                   v-for="item in menuList"
                  :key="item.id"
                  :title="item.title"
                  :image="require('~/assets/images/'+item.image)"
                  :id="item.id"
                  :price="item.price"
                  :ingredients="item.ingredients"
        />
    </div>
</template>
<script>
import MenuItem from "~/components/Menu/Menuitem.vue"

export default {
 components: {
    MenuItem},
    props:{
        menuList:{
            type:Array,
            required:true
        }
    }
}
</script>
<style >
.menu > div{
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