<template>
  <b-container class="bv-example-row mt-4">
    <b-row>
      <b-col cols="4" md="auto" v-for="item in products" :key="`${item.id}`">
        <b-card
          :title="item.title"
          :img-src="item.img_name"
          :img-alt="item.alt_text"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <h6>Price: {{item.price}}</h6>
          </b-card-text>
          <template v-slot:footer>
            <b-button @click="$bvModal.show('product-modal'); assign_single_product(item)">Details</b-button>
            <b-button class="ml-2" @click="add_to_cart(item)">Add Movie to Cart</b-button>
          </template>
        </b-card>
      </b-col>
    </b-row>

    <b-modal id="product-modal" :title="single_product.title">
      <img :src="single_product.img_name" alt="">
      <h6>Price: {{single_product.price}}</h6>
      <p><span class="font-weight-bold">Items Available:</span> {{single_product.inventory}}</p>
      <p><span class="font-weight-bold">Description of Movie:</span> {{single_product.desc}}</p>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "ProductsDisplay",
  data: () => ({
    products: [
      {
        id: 1,
        title: "Episode I – The Phantom Menace",
        desc:
          "When the Trade Federation organize a blockade around the planet Naboo, the Supreme Chancellor Valorum sends the Jedi Qui-Gon Jinn and Obi-Wan Kenobi to negotiate the end of the blockade. However the evil Viceroy Nute Gunray is ordered to kill the Jedi and invade Naboo.",
        price: 9.99,
        inventory: 37,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "Lightsaber battle between a Sith and Jedi",
        img_name: 'img/Phantom-1.jpg'
      },
      {
        id: 2,
        title: "Episode II – Attack of the Clones",
        desc:
          "Obi-Wan discovers that the dart is from the planet Kamino, and he heads to the remote planet. He finds an army of clones that has been under production for years for the Republic and that the bounty hunter Jango Fett was the matrix for the clones.",
        price: 9.99,
        inventory: 18,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "Jedi looking distraught at the impending battle",
        img_name: 'img/Attack-1.jpg'
      },
      {
        id: 3,
        title: "Episode III – Revenge of the Sith",
        desc:
          "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
        price: 9.99,
        inventory: 42,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "Epic battle between Obi-Wan and Anakin",
        img_name: 'img/Stith-1.jpg'
      },
      {
        id: 4,
        title: "Episode IV – A New Hope",
        desc:
          "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        price: 19.99,
        inventory: 15,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "Hans, Leia and Luke debating their next move",
        img_name: 'img/aNewHope-2.jpg'
      },
      {
        id: 5,
        title: "Episode V – The Empire Strikes Back",
        desc:
          "The adventure continues in this Star Wars sequel. Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.",
        price: 19.99,
        inventory: 2,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "Luke fighting Darth Vader",
        img_name: 'img/EmpireStikes-1.jpg'
      },
      {
        id: 6,
        title: "Episode VI – Return of the Jedi",
        desc:
          "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
        price: 19.99,
        inventory: 50,
        category: ["action", "science fiction"],
        is_favorite: false,
        alt_text: "A Star Wars celebration",
        img_name: 'img/Return-1.jpg'
      }
    ],
    //defining the product objects
    single_product: {
        id: null,
        title: null,
        desc: null,
        price: 0,
        inventory: 0,
        category: [],
        is_favorite: false,
        alt_text: null,
        img_name: null}
  }),
  
  methods: {
    assign_single_product(product){
      this.single_product = product; 
    },
    add_to_cart(product){
      console.log('product');
      console.log(product);
      //adding to the cart, emit will pass the product to the parent component of the Home.vue
      this.$emit('clicked', product);
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  
}

#b-card_img-src
{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
}


</style>