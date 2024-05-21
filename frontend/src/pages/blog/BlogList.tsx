// src/pages/blog/BlogList.tsx
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch blog posts (replace with actual data fetching)
    const fetchedPosts: BlogPost[] = [
      { id: '1', title: 'Natively Format JavaScript Dates and Times', excerpt: 'Modern browsers provide advanced JavaScript date/time formatting with locale and time zone support', date: '2024-05-21' },
      { id: '2', title: 'Sorting JavaScript Arrays By Nested Properties', excerpt: "Use lodash's orderBy function to sort arrays by various nested propertieshis is the second post.", date: '2024-05-20' },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="mt-4">
      {posts.map(post => (
        <BlogCard post={post} />
      ))}
    </div>
  );
};

export default BlogList;

