<template>
    <div>
      <intro>
        The Contact Page
      </intro>
      <section class="contact-section">
            <form action="" style="width: 40%;margin: auto;">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="subject">
                <label for="msg">Message</label>
                <textarea name="msg" id="msg" cols="30" rows="10" v-model="msg"></textarea>
                <input type="submit" value="Create" class="button">
                <input  value="cancel" class="button cancel">
            </form>
      </section>

    </div>
</template>

<script>

export default {
  data(){
    return{
       name:'',
       subject:'',
       msg:'',
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
            margin-left:1rem;
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
