<template>
  <div class="product-item">
    <template v-if="error">
      <em>An error occurred while fetching data</em>
    </template>
    <template v-else>
      <template v-if="!isLoading && products.length === 0">
        <em>No items to display</em>
      </template>
      <template v-else>
        <div v-for="(product, i) in products" :key="i">
          <Product :product="product" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isLoading: true,
      error: false,
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.isLoading = true;

      this.$store
        .dispatch('products/fetchProducts')
        .then((response) => {
          this.products = response;
          this.isLoading = false;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>
