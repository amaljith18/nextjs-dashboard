"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { usePost, useUpdatePost } from "@/hooks/usePosts";
import { PostForm } from "@/components/PostForm";
import { notFound } from "next/navigation";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = parseInt(params.id as string);

  const { data: post, isLoading, isError } = usePost(postId);
  const {
    mutate: updatePost,
    isLoading: isUpdating,
    error: updateError,
  } = useUpdatePost();

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !post) return notFound();

  const handleSubmit = (values: any) => {
    updatePost(
      { ...values, id: postId },
      {
        onSuccess: (values) => {
          console.log(values, "values values");

          setAlertMessage("Post updated successfully!");
          setTimeout(() => router.push("/admin"), 1500);
        },
        onError: (error: any) => {
          setAlertMessage(
            `Failed to update post: ${error?.message || "Unknown error"}`
          );
        },
      }
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

      {alertMessage && (
        <div
          className={`mb-4 p-3 rounded ${
            alertMessage.includes("Failed")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {alertMessage}
        </div>
      )}

      <PostForm
        defaultValues={post}
        onSubmit={handleSubmit}
        isSubmitting={isUpdating}
      />
    </div>
  );
}
