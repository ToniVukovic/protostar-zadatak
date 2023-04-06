import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
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
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { post, error, load };
};

export default getPost;
