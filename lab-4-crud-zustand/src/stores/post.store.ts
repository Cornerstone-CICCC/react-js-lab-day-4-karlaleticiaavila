import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export type Post = {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
};

type PostStore = {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  updatePost: (id: string, title: string, content: string) => void;
  deletePost: (id: string) => void;
  recoverPost: (id: string) => void;
  deletePostForever: (id: string) => void;
};

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],

      addPost: (title, content) =>
        set((state) => ({
          posts: [
            ...state.posts,
            {
              id: uuidv4(),
              title,
              content,
              isDeleted: false,
            },
          ],
        })),

      updatePost: (id, title, content) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, title, content } : post
          ),
        })),

      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: true } : post
          ),
        })),

      recoverPost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: false } : post
          ),
        })),

      deletePostForever: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    {
      name: "posts-storage",
    }
  )
);