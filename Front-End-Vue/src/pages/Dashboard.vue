<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h3 class="title">Sensors</h3>
            <p class="category"></p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="blue"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <a
          class="weatherwidget-io"
          href="https://forecast7.com/en/36d9030d71/antalya/"
          data-label_1="ANTALYA"
          data-label_2="Weather Forecast"
          data-font="Roboto"
          data-icons="Climacons Animated"
          data-days="5"
          data-theme="pillows"
          data-textcolor="#23958b"
          data-cloudcolor="#23958b"
          >ANTALYA Weather Forecast - Please Reload</a
        >

        <md-card>
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">
              ×
            </button>
            <span
              ><b> AGRICULTURAL WARNINGS! - </b> Currently there are no
              agricultural warnings.
            </span>
          </div>
        </md-card>
        <!--  <sensor-datas></sensor-datas> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>
<script>
import axios from "axios";
import SensorDatas from "@/pages/SensorDatas";
import { SimpleTable } from "@/components";

export default {
  components: {
    /*SensorDatas,*/
    SimpleTable
  },
  name: "RegularToolbar"
};
!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");
</script>
