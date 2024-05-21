import BlogList from "./BlogList";

const BlogPage = () => {
  let blogCount: number = 0;
  const fstBlogPub = new Date(2024, 4, 22);

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="pt-2 text-gray-800 dark:text-gray-400 ">Thank you for visiting my blog. Below you can find {blogCount} blog posts that I've written since {fstBlogPub.toLocaleString('en-us', { month: 'short' })} {fstBlogPub.getDate()}, {fstBlogPub.getFullYear()} </p>

      <h1 className="text-2xl mt-10 font-bold">Most Popular</h1>
      <BlogList />

    </div>
  );
};

export default BlogPage;

