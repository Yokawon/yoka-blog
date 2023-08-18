<template>
  <div class="sidebar-container">
    <div class="sidebar-info">
      <div class="sidebar-info-avatar">
        <img
          src="https://img0.baidu.com/it/u=3040624521,4193401327&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt="Avatar"
        />
      </div>
      <div class="sidebar-info-mid">
        <div>Yoka</div>
        <div>- O.o o.O O.o o.O -</div>
      </div>
      <div class="sidebar-info-bottom">
        <div><a href="">1</a></div>
        <div><a href="">2</a></div>
        <div><a href="">3</a></div>
      </div>
    </div>
    <div class="directory">
      <div class="c"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 280px;
  height: 300px;
  background-color: white;
}
.sidebar-info {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
}
.sidebar-info-avatar {
  display: flex;
  height: 200px;
  align-items: center;
}
.sidebar-info-avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 2px rgba(137, 176, 205, 0.75);
}
.sidebar-info-mid {
  display: flex;
  flex-direction: column;
  height: 40px;
  align-items: center;
}
.sidebar-info-mid div:first-child {
  font-size: 16px;
  font-weight: bold;
}
.sidebar-info-mid div:last-child {
  font-size: 15px;
  color: gray;
}
.sidebar-info-bottom {
  display: flex;
  height: 60px;
  align-items: center;
}
.sidebar-info-bottom div {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0px 5px;
  background-color: #f8b042bf;
  border-radius: 10px;
}
.sidebar-info-bottom div a {
  color: white;
}
</style>