<template>
    <div>
        <Header v-bind:product_passed="product" />
        <ProductsDisplay @clicked="add_to_cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </div>
</template>

<script>
//vue structure:
//1. template (html goes inside these tags)
//2. script
//3. style
import Header from './../components/shell/Header.vue'
import ProductsDisplay from './../components/products/ProductsDisplay.vue'

export default {
    name: 'Home',
    data: () => ({
        product: {}
    }),
    //the product is the prop for the header component
    components: {
        ProductsDisplay,
        Header
    },
    methods: {

        //add to cart method is linked to product display component, when you click above, it's looking for 
        //this specific method
        //assigning the value from the product display to the product data which is then assigned as
        //a prop for the header component product_passed
        add_to_cart(value){
            console.log('home vue');
            this.product = value;
            console.log(this.product);
        }
    }
}
</script>

<style scoped>

</style>