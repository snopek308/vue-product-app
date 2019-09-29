<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :to="'home'">Product Site</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <!-- uses the router link to go to the about page instead of the href -->
        <b-nav-item :to="'about'">
            About</b-nav-item>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-b-modal.modal-cart>
            Cart</b-nav-item>
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Abby Snopek</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- shopping cart -->
  <b-modal size="xl" id="modal-cart" title="Shopping Cart">
    <b-card 
      v-for="item in cart_items"
      :key="`${item.id}`" 
      class="mb-3"
    >
      <b-card-text>
        <b-container fluid>
        <b-row>
          <b-col><h6>{{item.title}}</h6></b-col>
          <b-col></b-col>
          <b-col><span class="font-weight-bold">{{item.price}}</span></b-col>
        </b-row>
      </b-container>   
      </b-card-text>
    </b-card>
    <b-list-group>
      <b-list-group-item><span class="font-weight-bold">Total: </span> ${{total}}</b-list-group-item>
    </b-list-group>
  </b-modal>
</div>
</template>

<script>


export default {
    name: 'Header',
    data: () => ({
      product_for_cart: {},
      cart_items: [],
      total: 0
    }),
    
    props: {
      product_passed: Object
    },
    methods: {
      add_to_cart(item){
        this.cart_items.push(this.product_for_cart);
      },
      calc_cart_total(price){
        this.total += price;
      }
    },
    //listening for the product passed prop to be updated, 
    //product is going from the display, to the view, and when it changes we need to add it to the cart
    //calculate price
    watch : {
      product_passed: function() {
        console.log('header watcher')
        this.product_for_cart = this.product_passed;
        this.add_to_cart(this.product_for_cart);
        this.calc_cart_total(this.product_for_cart.price);
      }
    }
}
</script>

<!--scoped means just for this page, if I take it out
it'll style the WHOLE app-->
<style scoped>

</style>