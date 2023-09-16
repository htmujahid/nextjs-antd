import fetcher from "@/lib/fetch";
import useSWR from "swr";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function usePosts(){
  const {
    data,
    error,
    isLoading
  } = useSWR<Post[]>('/posts', fetcher);

  return {
    posts: data,
    error,
    isLoading
  }
}