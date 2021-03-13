<template>
            <form action="" style="width: 40%;margin: auto;">
                <label for="title">Title</label>
                <input type="text" id="title">
                <label for="price">Price</label>
                <input type="number" id="price">
                <label for="thumbnail">Thumbnail</label>
                <input type="text" id="thumbnail">
                <label for="ingredient">Ingredients</label>
                <select name="" id="ingredient" multiple>
                    <option value="0">Tomato</option>
                    <option value="0">Chicken</option>
                </select>
                <input type="submit" value="Update" class="button">
                <input value="cancel" class="button cancel">

            </form>
</template>

<script>
export default {
   layout:'admin',
   props
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