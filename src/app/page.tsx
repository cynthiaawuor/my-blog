import { Calendar, Flame, LucideUser } from "lucide-react";
import blogPosts from "../data/blogPosts.json";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Flame className="text-(--primary-red)" size={24} />
          Latest Posts
        </h1>

        <p className="text-[rgba(64,60,60,0.6)]">
          Discover ideas, stories and perspectives from our latest posts
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className="card group bg-white/5 w-full shadow-sm rounded-xl overflow-hidden hover:shadow-lg hover:border-(--primary-red)/90 transition-all duration-300"
          >
            <figure className="group-hover:scale-105 transition-trasform duration-500">
              <img src={post.image} alt={post.title} />
            </figure>
            <div className="card-body ">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-(--primary-red)/10 text-(--primary-red)">
                  Productivity
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-(--primary-red)/10 text-(--primary-red)">
                  Self-improvement
                </span>
              </div>
              <h2 className="card-title group-hover:text-(--primary-red) transition-colors duration-300">
                {post.title}
              </h2>

              <div className="card-actions text-[rgba(64,60,60,0.6)] flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <LucideUser size={16} />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  May 28,2026
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
