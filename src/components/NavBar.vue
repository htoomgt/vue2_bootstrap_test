<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Vue2Bootstrap</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item" >
          <router-link            
            v-on:click.native="setActiveLink($route.path)"
            to="/"  
            :class="[ activeLink.home ? 'active' : '', 'nav-link' ]" 
          > 
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link 
            v-on:click.native="setActiveLink($route.path)"
            to="/about-us"  
            :class="[ activeLink.aboutUs ? 'active' : '', 'nav-link' ]"
          > 
            About Us
          </router-link>
        </li>

        <li class="nav-item">
          <router-link 
            to="/products" 
            v-on:click.native="setActiveLink($route.path)" 
            :class="[ activeLink.products ? 'active' : '', 'nav-link' ]"
          > 
            Products
          </router-link>
        </li>

        <li class="nav-item">
          <router-link 
            to="/services"  
            v-on:click.native="setActiveLink($route.path)" 
            :class="[ activeLink.services ? 'active' : '', 'nav-link' ]"
          > 
            Services
          </router-link>
        </li>

        <li class="nav-item">
          <router-link 
            to="/contact-us"  
            v-on:click.native="setActiveLink($route.path)" 
            :class="[ activeLink.contactUs ? 'active' : '', 'nav-link' ]"
          > 
            Contact Us
          </router-link>
        </li>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
// import router from '../router/index.js'

export default {
    name : 'NavBar',
    data : function(){
      return {
        activeLink : {
          home : false,
          aboutUs : false,
          products : false,
          services : false,
          contactUs : false
        }
      }
    },
    created(){
      this.setActiveLink(this.$route.path);
    },
    mounted(){
      // 
    },
    methods: {
      setActiveLink(routePath)
      {
        // alert(routePath)
        this.activeLink = {
          home : false,
          aboutUs : false,
          products : false,
          services : false,
          contactUs : false
        }

        // alert('you hit the set active');
        // router.replace({path : routePath})
        switch (routePath){
          case  '/':            
            this.activeLink.home = true 
            break
          case  '/about-us':
            this.activeLink.aboutUs = true 
            break
          case '/products':
            this.activeLink.products = true
            break
          case '/services':
            this.activeLink.services = true
            break
          case '/contact-us':
            this.activeLink.contactUs = true
            break
          default:
            this.activeLink.home = true 
            break  

        }

        // console.log(this.activeLink);
      }
    }
}
</script>

<style>

</style>