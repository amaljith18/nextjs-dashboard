"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost,
  Post,
} from "@/services/api";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log(data, "New post Created with data");

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", variables.id] });
      console.log("Post updated successfully!", data);
    },
    onError: (error: any) => {
      console.error("Failed to update post:", error.message || error);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: (data) => {
      console.log("Post deleted Successfully", data);

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
