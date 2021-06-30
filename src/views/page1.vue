<script>
import axios from "axios";
import DropdownMenu from "@/components/DropdownMenu.vue";
import { reactive, onBeforeMount } from "vue";
export default {
  setup() {
    const state = reactive({
      selectData: {
        system: null,
        provider: null,
      },
      selectedData: {
        system: null,
        provider: null,
      },
    });
    onBeforeMount(() => {
      axios
        .get("https://run.mocky.io/v3/e53744cf-7821-4e6f-adbb-43a069931840")
        .then((response) => {
          state.selectData = response.data;
        })
        .catch(function (response) {
          console.log(response);
        });
    });
    return { state };
  },
  components: {
    DropdownMenu,
  },
};
</script>
<template>
  <div id="page1">
    <iframe
      src="https://spreadsheets.google.com/tq?tqx=out:html&tq=&key=1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk&gid=0"
      style="width: 600px; height: 500px"
    ></iframe>
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
    <h1>{{ "Please select the item you like below" }}</h1>
    <DropdownMenu :items="state.selectData.system"></DropdownMenu>
    <DropdownMenu :items="state.selectData.provider"></DropdownMenu>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  width: 700px;
  margin: auto;
}

.section .select {
  appearance: none;
  box-shadow: none;
  font-family: 微軟正黑體;
  color: rgb(255, 255, 255);
  cursor: pointer;
  outline: 0px;
  background: none rgb(44, 62, 80);
  flex: 1 1 0%;
  padding: 0px 0.5em;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
}
</style>
