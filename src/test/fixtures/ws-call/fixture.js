import $post from "../../server/my-server";

async function getAllTodos() {
  const a = 10;
  return await $post.getAllTodos(1, a);
}
