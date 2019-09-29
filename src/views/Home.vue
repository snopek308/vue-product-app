
<template>
    <div>
        <ProductsDisplay />
    </div>
</template>

<script>
//vue structure:
//1. template (html goes inside these tags)
//2. script
//3. style
import ProductsDisplay from './../components/products/ProductsDisplay.vue'

export default {
    name: 'Home',
    components: {
        ProductsDisplay

    }
}
</script>