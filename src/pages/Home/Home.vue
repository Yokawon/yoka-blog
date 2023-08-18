<template>
  <div class="home-container">
    <Item></Item>
  </div>
</template>

<script>
import Item from "./Item/item.vue";

export default {
  components: { Item },
  name: "Home",
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>