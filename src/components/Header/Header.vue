<template>
  <div :class="headerNavClass">
    <div class="navbar-left">
      <div class="navbar-item"><a href="">Left</a></div>
    </div>
    <div class="navbar-mid">
      <div class="navbar-item"><a href="">首页</a></div>
      <div class="navbar-item"><a href="">归档</a></div>
      <div class="navbar-item"><a href="">关于</a></div>
    </div>
    <div class="navbar-right">
      <div class="navbar-item"><a href="">Right</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerNavClass: "header-nav",
      scrollDistance: 0,
    };
  },
  methods: {
    navClassTrans(e) {
      console.log(window.scrollY);
      if (window.scrollY > this.scrollDistance) {
        console.log("none");
        this.scrollDistance = window.scrollY;
        this.headerNavClass = "";
      } else if (window.scrollY < this.scrollDistance) {
        console.log("scrolled");
        this.scrollDistance = window.scrollY;
        this.headerNavClass = "header-nav-scrolled";
      }
      if (window.scrollY === 0) {
        console.log("default");
        this.scrollDistance = window.scrollY;
        this.headerNavClass = "header-nav";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.navClassTrans);
    scrollY;
  },
};
</script>

<style scoped>
@keyframes showNav {
  0% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0);
  }
}
.header-nav {
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  transition: 0.1s ease-in;
}
.header-nav-scrolled {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  background-color: #93aec180;
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 3px 3px 0px rgba(137, 176, 205, 0.55);
  backdrop-filter: blur(10px);
  animation: showNav 0.1s ease-out;
}
.navbar-left,
.navbar-mid,
.navbar-right {
  display: flex;
}
.navbar-left {
  margin-left: 15px;
}
.navbar-mid {
}
.navbar-right {
  margin-right: 15px;
}
.navbar-item {
  margin: 0px 2px;
  width: 55px;
  height: 35px;
  background-color: #9dbdba80;
  backdrop-filter: blur(5px);
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  transition: 0.2s ease-out;
}
.navbar-item:hover {
  background-color: white;
}
.navbar-item a {
  color: white;
}
.navbar-item:hover a {
  color: rgb(0, 0, 0);
}
</style>