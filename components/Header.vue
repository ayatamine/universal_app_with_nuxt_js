<template>
    <div class="topnav " :class="isOpened ? 'opened' : '' " id="myTopnav">
        <nuxt-link to="/admin">Admin</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/about">About Us</nuxt-link>
        <nuxt-link to="/menu">Menu</nuxt-link>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/" class="nav-item-brand">Nuxt Resturant</nuxt-link>
        <nuxt-link to="/" @click.prevent class="icon" >
            <div class="drawer-toggle" role="button" @click="isOpened = !isOpened">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nuxt-link>
    </div>

</template>
<script>
export default {
    data(){
        return {
            isOpened:false
        }
    }
}
</script>
<style scoped>
.topnav {
            background-color: #333;
            overflow: hidden;
            padding: 0 7rem;
        }
        /* Style the links inside the navigation bar */

        .topnav a {
            float: right;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        .nav-item-brand {
            float: left !important;
            font-weight: bold;
        }

        .nav-item-brand:hover {
            color: white !important;
            background: none !important;
        }
        /* Change the color of links on hover */

        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }
        /* Add an active class to highlight the current page */

        .topnav a.nuxt-link-exact-active {
            background-color: #4CAF50;
            color: white;
        }

        /* Hide the link that should open and close the topnav on small screens */

        .topnav .icon {
            display: none;
        }

        @media screen and (max-width: 600px) {
            .topnav {
                padding: 0;
            }
            .topnav a {
                display: none;
            }
            .topnav a.icon {
                float: right;
                display: block;
            }
            .nav-item-brand {
                display: none !important
            }
        }
        /* The "opened" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */

        @media screen and (max-width: 600px) {
            .topnav.opened {
                position: relative;
            }
            .topnav.opened a.icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .topnav.opened a {
                float: none;
                display: block;
                text-align: left;
            }
        }

        .drawer-toggle {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 21px;
            width: 35px;
            cursor: pointer;
        }

        @media (min-width: 768px) {
            .drawer-toggle {
                display: none;
            }
        }

        .drawer-toggle .bar {
            width: 90%;
            height: 2px;
            background-color: white;
        }
</style>

