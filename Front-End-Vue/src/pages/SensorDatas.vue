<template>
  <div>
    <!--
  <md-table  :table-header-color="tableHeaderColor">
    <md-table-row slot="md-table-row" v-for="sensor in list" v-bind:key="sensor.name" >
      <md-table-cell style="white-space: nowrap;" md-label="Sensör">{{ sensor['time'] }}</md-table-cell>
      <md-table-cell  md-label="Ölçüm">{{ sensor.t }}°C - % {{ sensor.h }} - {{sensor.co2}} ppm  - {{ (sensor.pec)}} mS/cm </md-table-cell>
      <md-table-cell style="white-space: nowrap;" md-label="Ölçüm Aralığı"> </md-table-cell>
     <md-table-cell style="white-space: nowrap;" md-label="Alarm - Nem"></md-table-cell>
      <md-table-cell style="white-space: nowrap;" md-label="Batarya"></md-table-cell>
      <md-table-cell style="white-space: nowrap;" md-label="Çekim Gücü"></md-table-cell>
      <md-table-cell style="white-space: nowrap;" md-label="Grafik"></md-table-cell>
    </md-table-row>
  </md-table>


    <table>
      <tr>
        <th>Sensor No</th>
        <th>Sıcaklık</th>
        <th>Nem</th>
        <th>CO2</th>
        <th>Basınç</th>
      </tr>
    </table>
    <table v-for="(value, key) in list" v-bind:key="key">

      <tr>
        <td> {{key}}</td>
        <td> {{value.t}}</td>
        <td> {{value.h}}</td>
        <td> {{value.co2}}</td>
        <td> {{value.p }}</td>
      </tr>
    </table>


    <table>
      <tr v-for="sensor in list" v-bind:key="sensor.id">
        <td>{{ sensor.t }}</td>
        <td>{{ sensor.h }},{{ sensor.t }}</td>
        <td>{{ sensor.lost }}</td>
        <td>{{ sensor.rssi }}</td>
        <td>{{ sensor.volt }}</td>
      </tr>
    </table> -->
    <tr v-for="sensor in list" v-bind:key="sensor.id">
      <td>{{ sensor }}</td>

    </tr>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "sensors",
  data() {
    return { list: undefined };
  },
  mounted() {
    var config = {
      method: "post",
      url: "http://localhost:3000/acs/updatedData",
      data: '{"currData":1,"alarms":1}'
    };

    axios(config).then(response => {
      this.list = response.data.currData;
      console.log(this.list);
      console.warn(response.data);
    });
  }
};
</script>

<style></style>
