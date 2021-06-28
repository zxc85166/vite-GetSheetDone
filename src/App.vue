<template>
  <h1>Call API</h1>
  <p v-for="item in list" :key="item.name">
    {{ item.name }} -- {{ item.image }}
  </p>
  <el-button
    @mouseenter="showimg0 = !showimg0"
    @mouseleave="showimg0 = !showimg0"
    type="primary"
    >主要按钮</el-button
  >
  <el-button
    @mouseenter="showimg1 = !showimg1"
    @mouseleave="showimg1 = !showimg1"
    type="sucess"
    >主要按钮</el-button
  >
  <el-button
    @mouseenter="showimg2 = !showimg2"
    @mouseleave="showimg2 = !showimg2"
    type="info"
    >主要按钮</el-button
  >
  <el-button
    @mouseenter="showimg3 = !showimg3"
    @mouseleave="showimg3 = !showimg3"
    type="warning"
    >主要按钮</el-button
  >
  <el-button
    @mouseenter="showimg4 = !showimg4"
    @mouseleave="showimg4 = !showimg4"
    type="danger"
    >主要按钮</el-button
  >
  <div class="picture">
    <img v-show="showimg0" :src="picture0" />
    <img v-show="showimg1" :src="picture1" />
    <img v-show="showimg2" :src="picture2" />
    <img v-show="showimg3" :src="picture3" />
    <img v-show="showimg4" :src="picture4" />
  </div>
  <div class="pictures">
    <img v-for="item in list" :key="item.name" :src="item.image" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import GetSheetDone from "get-sheet-done";

export default {
  // components: { HelloWorld },
  name: "App",
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
  async mounted() {
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
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.picture {
  display: flex;
  padding-top: 20px;
  width: 50%;
  height: 300px;
  margin: 0 auto;
}
.pictures {
  display: flex;
  padding-top: 20px;
  width: 500px;
  height: 200px;
}
</style>
