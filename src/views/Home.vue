<script>
import GetSheetDone from "get-sheet-done";
export default {
  component: {},
  data() {
    return {
      list: [],
      picture0: "",
      picture1: "",
      picture2: "",
      picture3: "",
      picture4: "",
      // 開關
      showimg0: false,
      showimg1: false,
      showimg2: false,
      showimg3: false,
      showimg4: false,
    };
  },
  async beforeMount() {
    let result = await GetSheetDone.labeledCols(
      "1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk"
    );
    console.log(result.data);
    this.list = result.data;
    this.picture0 = result.data[0]["image"];
    this.picture1 = result.data[1]["image"];
    this.picture2 = result.data[2]["image"];
    this.picture3 = result.data[3]["image"];
    this.picture4 = result.data[4]["image"];
  },
  methods: {
    toggleStyle: function () {
      this.showimg0 = !this.showimg0;
    },
  },
};
</script>
<template>
  <div id="Home">
    <h1>串接google sheet</h1>
    <p v-for="item in list" :key="item.name">
      {{ item.name }} -- {{ item.image }}
    </p>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="p-1">
            <el-button
              @mouseenter="showimg0 = !showimg0"
              @mouseleave="showimg0 = !showimg0"
              type="primary"
              >大廳</el-button
            >
          </div>
          <div class="p-1">
            <el-button
              @mouseenter="showimg1 = !showimg1"
              @mouseleave="showimg1 = !showimg1"
              type="sucess"
              >健檢大樓</el-button
            >
          </div>
          <div class="p-1">
            <el-button
              @mouseenter="showimg2 = !showimg2"
              @mouseleave="showimg2 = !showimg2"
              type="info"
              >家庭醫學科</el-button
            >
          </div>
          <div class="p-1">
            <el-button
              @mouseenter="showimg3 = !showimg3"
              @mouseleave="showimg3 = !showimg3"
              type="warning"
              >眼科</el-button
            >
          </div>
          <div class="p-1">
            <el-button
              @mouseenter="showimg4 = !showimg4"
              @mouseleave="showimg4 = !showimg4"
              type="danger"
              >小兒科</el-button
            >
          </div>
        </div>
        <div class="d-flex col-sm-9 hosmap">
          <img v-show="showimg0" :src="picture0" />
          <img v-show="showimg1" :src="picture1" />
          <img v-show="showimg2" :src="picture2" />
          <img v-show="showimg3" :src="picture3" />
          <img v-show="showimg4" :src="picture4" />
        </div>
      </div>
    </div>
    <div class="pictures">
      <img v-for="item in list" :key="item.name" :src="item.image" />
    </div>
  </div>
</template>

<style scoped>
.hosmap {
  padding-top: 20px;
  height: 300px;
}
.pictures {
  display: flex;
  padding-top: 20px;
  width: 500px;
  height: 200px;
}
</style>
