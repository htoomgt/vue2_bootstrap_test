import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/landing_page/LandingPage.vue'
import AboutUs from '../components/about_page/AboutUs.vue'
import Products from '../components/product_page/Products.vue'
import Services from '../components/service_page/Services.vue'
import ContactUs from '../components/contact_us_page/ContactUs.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path : '/',
            name : 'home',
            component: LandingPage
        },
        {
            path : '/about-us',
            name : 'about-us',
            component: AboutUs
        },
        {
            path : '/products',
            name : 'products',
            component : Products
        },
        {
            path : '/services',
            name : 'services',
            component: Services
        },
        {
            path : '/contact-us',
            name : 'contact-us',
            component: ContactUs
        }
    ]
});

export default router;