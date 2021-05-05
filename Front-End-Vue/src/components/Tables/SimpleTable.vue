<template>
  <div>
    <table v-for="(value, sensor) in sensors" v-bind:key="sensor">
      <tr>
        <td>{{ sensor }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>

    <div>
      <ul></ul>
    </div>
  </div>
</template>
<style>
.content table td,
.content table th {
  width: 120px;
  text-align: center !important;
}
</style>
<script>
var axios = require("axios");

export default {
  name: "sensors",
  data() {
    return {
      sensors: []
    };
  },
  methods: {
    getData() {
      var config = {
        method: "get",
        url: "http://localhost:3000/iot/updatedData",
        data: "{}"
      };
      axios(config).then(response => {
        this.sensors = response.data;
        console.warn(this.sensors);
      });
    }
  },

  mounted() {
    var interval = setInterval(() => {
      this.getData();
    }, 3000);
  }
};
</script>
