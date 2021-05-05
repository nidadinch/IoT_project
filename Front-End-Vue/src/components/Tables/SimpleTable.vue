<template>
  <div>

    <table v-for="(value, sensor) in sensors" v-bind:key="sensor">
      <tr>
        <td>{{ sensor }}</td>
        <td>{{ value}}</td>
      </tr>
    </table>

    <div>
      <ul>
      </ul>
    </div>


  </div>
</template>
<style>
.content table td, .content table th{
  width:120px;
  text-align: center !important;
}
</style>
<script>
import {SimpleTable} from "@/components";
import vue from "vue";

var axios = require("axios");

export default {
  name: "sensors",
  data() {
    return {
      sensors:[],
    }

  },
  methods: {
  },

  mounted() {

  },


}

</script>
