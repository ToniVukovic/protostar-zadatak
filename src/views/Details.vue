<template>
  <div v-if="error">{{ error }}</div>
  <div class="card-container" v-if="post">
    <div class="card" style="width: 36rem">
      <div class="card-body">
        <h2 class="card-title mb-4">{{ post.title }}</h2>
        <p class="card-text">
          {{ post.body }}
        </p>
        <router-link to="/">Go back to all posts</router-link>
      </div>
    </div>
  </div>
  <div v-for="comment in comments" :key="comment.id">
    <div class="comment-container">
      <div class="card border-light mb-3" style="max-width: 36rem">
        <div class="card-header" style="text-align: left">
          <em>{{ comment.email }}</em>
        </div>
        <div class="comment-body">
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, comments, load } = getPost(props.id);
    load();

    return { post, error, comments };
  },
};
</script>

<style scoped>
.card-container,
.comment-container {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.card-text {
  text-align: left;
  font-size: 20px;
}

a {
  text-decoration: none;
}

.comment-container {
  font-size: 14px;
  text-align: left;
}

.comment-body {
  padding: 8px;
}
</style>
