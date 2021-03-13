export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    //vue
    head: {
        title: 'resturant modified',
        //description: 'a simple resturant',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap' },
            //{ rel: 'stylesheet', href: '/static/styles/style.css' }
        ],
        //static
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#7d5947', duration: 6000, height: '4px' },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/styles/style.css',
        '~/assets/styles/main.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~plugins/plug-recipie.js'
    ],
    //main.js
    //datepicker vue-loader vue-alert
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/toast',
    ],
    toast: {
        position: 'top-left',
        register: [ // Register custom toasts
            {
                name: 'my-error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        extractCss: false,
        extractCss: {
            ignoreOrder: false
        }
    },
    env: {
        baseurl: process.env.BASE_URL || 'https://resturant-c64da-default-rtdb.firebaseio.com'
    },
    transition: {
        name: 'fade',
        de: 'out-in'
    },
    //rootDir: '/sub-folder'
    router: {
        middleware: 'name'
    }





}