<script>
import axios from "axios";
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
  beforeMount() {
    axios
      .get("http://localhost:25020/GetItems")
      .then((response) => {
        console.log(response.data);
        this.list = response.data;
        this.picture0 = response.data[0]["image"];
        this.picture1 = response.data[1]["image"];
        this.picture2 = response.data[2]["image"];
        this.picture3 = response.data[3]["image"];
        this.picture4 = response.data[4]["image"];
      })
      .catch(function (response) {
        console.log(response);
      });
  },
  methods: {
    toggleStyle: function () {
      this.isActive = !this.isActive;
    },
    POSTme() {
      axios
        .post("http://localhost:25020/PostItem", {
          ItemCode: "I0010",
          ItemName: "全端班測試",
          Price: 5000,
          Image:
            "https://pbs.twimg.com/media/E2HnAtVUYAEIoDm?format=png&name=small",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteme() {
      axios
        .delete("http://localhost:25020/DeleteItem?ItemID=I0010", {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div id="page2">
    <h1>POST測試</h1>
    <el-button @click="POSTme" type="warning">發送POST</el-button>
    <h1>delete測試</h1>
    <el-button @click="deleteme" type="warning">發送delete</el-button>
    <h1>Call API</h1>
    <p v-for="item in list" :key="item.itemName">
      {{ item.itemName }} -- {{ item.image }}
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
      <img v-for="item in list" :key="item.itemName" :src="item.image" />
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
