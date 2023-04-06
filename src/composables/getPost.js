import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const comments = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
      if (!data.ok) {
        throw Error("that post does not exist");
      }

      post.value = await data.json();

      let commentData = await fetch(
        "https://jsonplaceholder.typicode.com/post/" + id + "/comments"
      );
      if (!commentData.ok) {
        throw Error("those comments do not exist");
      }

      comments.value = await commentData.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, comments, load };
};

export default getPost;
