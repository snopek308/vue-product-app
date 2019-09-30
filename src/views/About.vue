
<template>
    <div>
        <Header v-bind:product_passed="product" />
        <ProductsDisplay @clicked="add_to_cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        About Page-404 Error
        Tyler, I have this page because I was playing with routing but didn't finish the page.
        If you type in: http://localhost:8080/#/home it should take you back to the home page because of the 
        routing I added in.

    </div>
</template>

<script>

import Header from './../components/shell/Header.vue'
//vue structure:
//1. template (html goes inside these tags)
//2. script
//3. style
export default {
    name: 'About',
    components: {

    }
}
</script>