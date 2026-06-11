import { EyeOff, Plus, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import blogPosts from "../../data/blogPosts.json";

const publishedDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default function MyBlogs() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between my-8 mx-4">
        <h1 className="text-3xl font-bold tracking-tight">My Blogs</h1>
        <Link href="/editor">
          <button className="btn border-none bg-(--primary-red) w-32 rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </Link>
      </div>
      {blogPosts.map((post) => (
        <div className="card w-full md:w-[80%] mx-auto mb-8 card-sm shadow-lg border border-black/5 hover:border-(--primary-red)/20">
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <div className="card-body flex flex-col xl:flex-row">
              <div className="flex-1">
                <h2 className="card-title font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 rounded-full font-medium px-2 py-0.5 text-green-700">
                    published
                  </span>
                  <span>{publishedDate()}</span>
                </div>
              </div>
              <div className="flex items-center p-2">
                <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                  <EyeOff className="w-4 h-4" />
                </button>

                <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                  <SquarePen className="w-4 h-4" />
                </button>

                <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* <div className="card w-full sm:w-[80%] mx-auto mb-8 bg-base-20 card-sm shadow-lg border border-black/5 hover:border-(--primary-red)/20">
        <div className="card-body flex flex-col sm:flex-row">
          <div className="flex-1">
            <h2 className="card-title font-semibold truncate">
              Building Habits That Stick
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 rounded-full font-medium px-2 py-0.5 text-green-700">
                published
              </span>
              <span>{publishedDate()}</span>
            </div>
          </div>
          <div className="card-actions flex items-center p-2">
            <Link href="#unpublish">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <EyeOff className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <SquarePen className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <Trash2 className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full sm:w-[80%] mx-auto mb-8 bg-base-20 card-sm shadow-lg border border-black/5 hover:border-(--primary-red)/20">
        <div className="card-body flex flex-col sm:flex-row">
          <div className="flex-1">
            <h2 className="card-title font-semibold truncate">
              Building Habits That Stick
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 rounded-full font-medium px-2 py-0.5 text-green-700">
                published
              </span>
              <span>{publishedDate()}</span>
            </div>
          </div>
          <div className="card-actions flex items-center gap-2 p-2">
            <Link href="#unpublish">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <EyeOff className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <SquarePen className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <Trash2 className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full sm:w-[80%] mx-auto mb-8 bg-base-20 card-sm shadow-lg border border-black/5 hover:border-(--primary-red)/20">
        <div className="card-body flex flex-col sm:flex-row">
          <div className="flex-1">
            <h2 className="card-title font-semibold truncate">
              Building Habits That Stick
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 rounded-full font-medium px-2 py-0.5 text-green-700">
                published
              </span>
              <span>{publishedDate()}</span>
            </div>
          </div>
          <div className="card-actions flex items-center gap-2 p-2">
            <Link href="#unpublish">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <EyeOff className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <SquarePen className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <Trash2 className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full sm:w-[80%] mx-auto mb-8 bg-base-20 card-sm shadow-lg border border-black/5 hover:border-(--primary-red)/20">
        <div className="card-body flex flex-col sm:flex-row">
          <div className="flex-1">
            <h2 className="card-title font-semibold truncate">
              Building Habits That Stick
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 rounded-full font-medium px-2 py-0.5 text-green-700">
                published
              </span>
              <span>{publishedDate()}</span>
            </div>
          </div>
          <div className="card-actions flex items-center gap-2 p-2">
            <Link href="#unpublish">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <EyeOff className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <SquarePen className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#delete">
              <button className="btn btn-link text-black/50 hover: hover:bg-black/10">
                <Trash2 className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
