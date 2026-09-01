import Link from "next/link";
import blogPosts from "../../../data/blogPosts.json";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

interface Post {
  id: number;
  title: string;
  author: { name: string; avatar: string; role: string };
  image: string;
  tags: string[];
  datePublished: string;
  content: string;
}

const getPostById = async (id: string): Promise<Post | undefined> => {
  const post = await blogPosts.find((post) => post.id.toString() === id);
  return post;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostById(slug);
  if (post === undefined) {
    return <div> "Post not found"</div>;
  }
  return (
    <article className="max-w-3xl mx-auto min-h-screen mt-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-700 py-2 hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
      </div>

      <div key={post.id} className="mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 my-4 object-cover rounded-2xl"
        />
        <div>
          <span className="flex flex-row gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-(--primary-red)/5 p-2 rounded-full text-(--primary-red) text-xs"
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight my-4">
          {post.title}
        </h1>
        <div className="my-8">
          {post.content.split("\n\n").map((p: string, i: number) => (
            <p
              key={i}
              className="text-gray-700 mb-4 leading-relaxed tracking-wider"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
