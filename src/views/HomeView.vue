<template>
  <div class="home">
    <h1 class="mt-4 mb-3">Click on a card to open its content!</h1>
    <!-- search -->
    <div class="mb-2"><input type="text" v-model="search" /></div>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
