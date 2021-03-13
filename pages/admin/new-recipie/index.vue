<template>
            <form  style="width: 40%;margin: auto;">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="menuItem.title">
                <label for="price">Price</label>
                <input type="number" id="price" v-model="menuItem.price">
                <label for="thumbnail">Thumbnail</label>
                <input type="text" id="thumbnail" v-model="menuItem.thumbnail">
                <label for="ingredient">Ingredients</label>
                <select name="" id="ingredient" multiple v-model="menuItem.ingredients">
                    <option value="0">Tomato</option>
                    <option value="1">Chicken</option>
                </select>
                <input type="submit" value="Create" class="button"
                 @click.prevent="saveRecipie"
                >
                <input value="cancel" class="button cancel">

            </form>
</template>

<script>
import axios from 'axios'
export default {
   layout:'admin',
   data(){
       return{
           menuItem:{
               title:'',
                price:'',
                thumbnail:'menu_style_two_1.jpg',
                ingredients:[],
           }
       }

   },
   methods:{
       saveRecipie(){
           console.log('saving ...');
           //http request firebase store data
           //axios
           //https://resturant-c64da-default-rtdb.firebaseio.com/
           axios.post('https://resturant-c64da-default-rtdb.firebaseio.com/menuList.json',this.menuItem)
           .then(data =>{
               console.log(data);
           })
           .catch(err => {
               console.log(err);
           })

       }
   }
}
</script>

<style>
.contact-section{
   padding-top: 1rem;
}

input,
        select,
        textarea {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
        }

        .button {
            font: inherit;
            background-color: #0f54a9;
            color: white;
            padding: 5px;
            cursor: pointer;
            border: 1px solid #1980ff;
            width :200px ;
            float :left ;

        }

        .button:hover,
        .button:active {
            background-color: #1c6ac9;
            border: 1px solid rgb(26, 29, 189);
        }

        .inverted {
            background-color: white;
            color: black;
            border: 1px solid transparent;
        }

        .inverted:hover,
        .inverted:active {
            color: #ccc;
            background-color: white;
            border: 1px solid transparent;
        }

        .cancel {
            background-color: red;
            color: white;
            border: 1px solid transparent;
        }

        .cancel:hover,
        .cancel:active {
            background-color: salmon;
            border: 1px solid transparent;
            color: white;
        }

</style>