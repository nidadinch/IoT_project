<template>
  <div>
    <md-table  table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" v-for="item in list" v-bind:key="item.name" >
        <md-table-cell style="white-space: nowrap;" md-label="Sensör">{{ item.time }}</md-table-cell>
        <md-table-cell  md-label="Ölçüm">{{ item.t }}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Ölçüm Aralığı">{{ item.h }}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Alarm - Sıcaklık">{{item.co2}}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Alarm - Nem">{{ item.alarm2 }}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Batarya">{{ item.battery }}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Çekim Gücü">{{ item.cekim }}</md-table-cell>
        <md-table-cell style="white-space: nowrap;" md-label="Grafik">{{ item.graph }}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);


export default {
    props: {
      tableHeaderColor: {
        type: String,
        default: ""
      }
    },

  name: "sensors",
  data() {
    return {list:undefined}
  },
  mounted() {
    var config = {
      method: 'post',
      url: 'http://localhost:3000/acs/updatedData',
      data: "{\"currData\":1,\"alarms\":1}",
    };
    axios(config)
      .then((response)=>
      {
        this.list = response.data.currData;
        console.warn(response.data.currData);
      })
  }
}

</script>

<style>

</style>
