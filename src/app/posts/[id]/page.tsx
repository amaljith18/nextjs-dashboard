"use client";

import { usePost } from "@/hooks/usePosts";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [postId, setPostId] = useState<number | null>(null);

  useEffect(() => {
    params.then(({ id }) => {
      setPostId(parseInt(id));
    });
  }, [params]);

  const { data: post, isLoading, isError } = usePost(postId || 0);

  if (postId === null) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !post) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </div>
  );
}
