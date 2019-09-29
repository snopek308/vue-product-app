import Vue from 'vue'
import Router from 'vue-router'


//using the Vue router library, passing in the router
Vue.use(Router)

// ./takes you out of a folder, ../takes out out again
//The route needs to know about the component which is why we write this
import Home from './../views/Home.vue';
import About from './../views/About.vue';

//export is a key word to allow you to use Router in a different file
//Router is really being exported/used to be used in Main.js
//(export default)exported a single class, function, or primitive from a script file
export default new Router({
    //used for full url navigation, not hased based
    mode: 'history',
    //serving the app out of the public directory
    base: '/',
    //just providing the route itself, the navigation of where the code
    //routes should be created from the view folder
    //array: path: /Home,  ex: /About, /Contact
    //component represents a single thing in this app
    //component is what I make in my view folder
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        //don't need componet bc I already have it, the redirect sends it back to the home page
        {path: '/home', redirect: '/'},
    ]
})