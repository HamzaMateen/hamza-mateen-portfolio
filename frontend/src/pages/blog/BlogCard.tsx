import React from 'react';

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

// FC can optionally take a type arg that types this component's props
const BlogCard: React.FC<{ post: BlogCardProps }> = ({ post }) => {
  return (
    <div className='mt-2'>
      <div className='flex justify-between items-start'>
        <h1 className='text-lg font-medium'>{post.title}</h1>
        <h1 className='text-primary text-lg'>{post.date}</h1>
      </div>
      <p className='text-primary'>{post.excerpt}</p>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default BlogCard;
