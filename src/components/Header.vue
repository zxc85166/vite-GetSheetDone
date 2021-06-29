<script>
export default {
  data() {
    return {
      components: {},
    };
  },
  methods: {
    order() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div id="headerhold">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand pointer" @click="order()"
          ><img src="@/assets/logo.png" alt="" class="logo me-2" /> Google
          Sheet串接測試</a
        >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="mx-3" to="/">首頁</router-link>
            </li>
            <li>
              <router-link class="mx-3" to="/page1">另一頁</router-link>
            </li>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk/edit#gid=0"
                target="_blank"
                >連接的sheet</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
* {
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  color: #00c58e;
}
li {
  overflow: hidden;
}

.logo {
  width: 40px;
}
.pointer {
  cursor: pointer;
}
#headerhold {
  position: sticky;
  top: 0px;
  z-index: 100;
  width: 100%;
}
</style>
