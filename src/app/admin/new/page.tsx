/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useCreatePost } from "@/hooks/usePosts";
import { PostForm } from "@/components/PostForm";

export default function NewPostPage() {
  const router = useRouter();
  const { mutate: createPost, isPending } = useCreatePost();

  const handleSubmit = (values: any) => {
    createPost(values, {
      onSuccess: () => {
        router.push("/admin");
      },
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <PostForm onSubmit={handleSubmit} isSubmitting={isPending} />
    </div>
  );
}
