import BlogDataLoader from "@/utils/blogDataLoader";
import Link from "next/link";
import React from "react";

// const blogs = [
//   {
//     id: 1,
//     title: "Our Beautiful Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!",
//   },
//   {
//     id: 2,
//     title: "Let's Build Your Site",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!",
//   },
//   {
//     id: 3,
//     title: "Awesome Interactivity",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!",
//   },
//   {
//     id: 4,
//     title: "Fully Responsive Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!",
//   },
// ];

const BlogPage = async () => {

  const blogs = await BlogDataLoader();
  // console.log(blogs)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-20 container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="border border-cyan-400 px-4 py-6 rounded-md">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="my-5">{body}</p>
          <Link
            href={`/blogs/${id}`}
            className="bg-green-400 px-4 py-3 rounded-md"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
