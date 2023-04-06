<template>
  <!-- boot -->
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
  <!-- boot -->
</template>

<script>
import getPost from "@/composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error };
  },
};
</script>

<style scoped>
.card-container {
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
</style>
