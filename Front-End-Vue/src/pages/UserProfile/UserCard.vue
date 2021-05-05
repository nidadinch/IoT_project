<template>
<div>
  <md-card class="md-card-profile">
    <div class="md-card-avatar" >
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>

      <h6 class="category text-gray">Dost Tarım</h6>
      <h4 class="card-title">Erol Dost</h4>
      <p class="card-description"></p>
    </md-card-content>
  </md-card>
</div>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
