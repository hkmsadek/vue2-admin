<template>
  <div class="container">
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import LineChart from "./charJS_component.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
  }),
  async mounted() {
    this.loaded = false;
    try {
      const { userlist } = await fetch("/api/userlist");
      this.chartdata = userlist;
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
