<template>
  <div class="articlepage-container">
    <div class="articlepage-title">
      <h1>Hello World</h1>
    </div>
    <div class="articlepage-pubtime">
      <p>- 2023-8-18</p>
    </div>
    <div class="articlepage-content" v-html="content"></div>
    <div class="articlepage-componets">
      <a href="">&lt; Previous</a>
      <a href="">Next ></a>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "ArticlePage",
  data() {
    return {
      content: `bold text

**bold text**

*italicized text*

> blockquote

1. First item

2. Second item

3. Third item

- First item
- Second item
- Third item

[title](https://www.example.com)

![flower](https://img1.baidu.com/it/u=4014765096,45504095&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800)

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

Here's a sentence with a footnote. [^1]

### My Great Heading {#custom-id}

~~The world is flat.~~

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media`,
    };
  },
  mounted() {
    this.content = marked.parse(this.content);
  },
};
</script>

<style scoped>
.articlepage-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  background-color: white;
}
.articlepage-title h1 {
  margin-bottom: 5px;
  transition: 0.1s ease-out;
}
.articlepage-pubtime p {
  color: gray;
  margin: 0;
}
.articlepage-content {
  overflow: hidden;
}
.articlepage-componets {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.articlepage-componets a:first-child,
.articlepage-componets a:last-child {
  width: 350px;
  height: 60px;
  line-height: 40px;
  border-radius: 15px;
  border: 2px solid #f8b042;
  padding: 10px;
  box-sizing: border-box;
  color: #f8b042;
}
.articlepage-componets a:hover {
  color: #e68a00;
}
.articlepage-componets a:first-child {
  text-align: start;
}
.articlepage-componets a:last-child {
  text-align: end;
}
</style>