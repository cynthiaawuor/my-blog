import { ArrowLeft, Save, Send } from "lucide-react";
import Link from "next/link";

export default function Editor() {
  return (
    <div className="w-full sm:w-[80%] mx-auto mt-10">
      <button className="flex items-center gap-1 text-sm text-gray-700 mb-6 py-2">
        <Link href="/blogs" className="flex items-center gap-1">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
      </button>
      <h1 className="font-bold text-3xl mb-8">Write a Post</h1>
      <form action="" className="grid grid-cols-1">
        <label htmlFor="title" className="font-medium text-sm">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Your amazing title..."
          className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-sm transition-colors file:text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 md:text-sm mt-1 mb-8 text-lg placeholder:text-sm "
        />
        <label htmlFor="summary" className="font-medium text-sm">
          Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          placeholder="A brief summary of your post..."
          rows={2}
          className="min-h-15 w-full rounded-md border border-gray-300 bg-transparent
          px-3 py-1 shadow-sm transition-colors file:text-sm file:border-0
          file:bg-transparent file:font-medium placeholder:text-gray-600
          focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-red-500 md:text-sm mt-1 mb-8 text-lg placeholder:text-sm "
        ></textarea>
        <label htmlFor="cover-image" className="font-medium text-sm">
          Cover Image URL
        </label>
        <input
          type="text"
          id="cover-image"
          placeholder="https://example.com/..."
          className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 
          shadow-sm transition-colors file:text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-600
          placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 md:text-sm mt-1 mb-8 text-lg "
        />
        <label htmlFor="tags" className="font-medium text-sm">
          Tags(comma separated)
        </label>
        <input
          type="text"
          id="tags"
          placeholder="tech,design,life"
          className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-sm transition-colors file:text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-600
          placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 md:text-sm mt-1 mb-8 text-lg "
        />
        <label htmlFor="content" className="font-medium text-sm">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your post here..."
          rows={10}
          className="min-h-40 w-full rounded-md border border-gray-300 bg-transparent
          px-3 py-1 shadow-sm transition-colors file:text-sm file:border-0
          file:bg-transparent file:font-medium placeholder:text-gray-600 placeholder:text-sm
          focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-red-500 md:text-sm mt-1 mb-8 text-lg "
        ></textarea>
        <div className="flex gap-4 mb-4 text-sm font-medium">
          <button className="btn bg-transparent text-gray-400 border-none hover:bg-transparent hover:text-gray-600 tansition-colors duration-300">
            <Save size={16} />
            <span>Save Draft</span>
          </button>
          <button className="btn bg-(--primary-red) border-none hover:bg-(--primary-red)/90 transition-colors duration-300">
            <Send size={16} />
            <span>Publish</span>
          </button>
        </div>
      </form>
    </div>
  );
}
