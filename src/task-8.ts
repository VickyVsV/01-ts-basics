import axios from "axios";

interface Poster {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Poster[]> {
  const response = await axios.get<Poster[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
