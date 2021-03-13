import Vuex from 'vuex';
import axios from 'axios';
const store = () => {
    return new Vuex.Store({
        state: {
            recipies: []
        },
        getters: {
            recipies(state) {
                return state.recipies
            }
        },
        mutations: {
            setRecipies(state, recipies) {
                state.recipies = recipies
            }
        },
        actions: {
            setRecipies(ctx, recipies) {
                ctx.commit('setRecipies', recipies)
            },
            //return data
            //store it
            nuxtServerInit(ctx, context) {
                return axios.get(process.env.baseurl + '/menuList.json')
                    .then(res => {
                        //res.data
                        //res.erro
                        const menuListArray = [];
                        for (const key in res.data) {
                            menuListArray.push({
                                id: key,
                                title: res.data[key].title,
                                image: res.data[key].thumbnail,
                                price: parseFloat(res.data[key].price),
                                ingredients: res.data[key].ingredients,
                            })
                        }
                        ctx.commit('setRecipies', menuListArray)
                    })
                    .catch(err => {
                        console.log(err);
                    })







                // ctx.commit('setRecipies', recipies)
                // context.store
                // return new Promise((resolve, reject) => {
                //     ctx.commit('setRecipies', [{
                //             title: "recipie 1",
                //             id: 1,
                //             image: 'menu_style_two_1.jpg',
                //             price: 100
                //         },
                //         {
                //             title: "recipie 2",
                //             id: 2,
                //             image: 'menu_style_two_2.jpg',
                //             price: 200
                //         },
                //     ])
                //     resolve();

                // })
            }
        }
    })
}
export default store;