<template>
  <!-- boot -->
  <div>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <div class="card border-dark mb-3" style="max-width: 18rem">
        <h5 class="card-title pt-2 card-header">
          {{ shortTitle }}
        </h5>
        <div class="card-body">
          <p class="card-text">
            {{ snippet }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
  <!-- boot -->
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const shortTitle = computed(() => {
      return props.post.title.substring(0, 15) + "...";
    });

    const snippet = computed(() => {
      return props.post.body.substring(0, 80) + "...";
    });

    return { snippet, shortTitle };
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: inherit;
}
</style>
