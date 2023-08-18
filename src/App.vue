<template>
  <div class="main-container">
    <Header></Header>
    <div class="main-content">
      <Sidebar></Sidebar>
      <!-- <div class="editor">
        <textarea
          class="input"
          :value="markdownContent"
          @input="update"
        ></textarea>
        <div class="output" v-html="renderedMarkdown"></div>
      </div> -->
      <div class="router-content">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "App",
  data() {
    return {
      // markdownContent: `# Hello`,
    };
  },
  methods: {
    // update(e) {
    //   console.log("1");
    //   return (this.markdownContent = e.target.value);
    // },
  },
  computed: {
    // renderedMarkdown() {
    //   return marked.parse(this.markdownContent);
    // },
  },
};
</script>

<style>
body {
  margin: 0;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1100px;
  height: 2000px;
  box-sizing: border-box;
  margin-top: 80px;
  margin-bottom: 80px;
}
.router-content {
  width: 800px;
}
.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
