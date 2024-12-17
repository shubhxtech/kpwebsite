import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { slug } = useParams(); // Capture slug from URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            const response = await fetch('/blogData.json'); // Fetch the JSON data
            const blogs = await response.json();

            // Find the blog matching the slug
            const matchedBlog = blogs.find(blog =>
                blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') === slug
            );
            setBlog(matchedBlog);
        };

        fetchBlogData();
    }, [slug]);

    if (!blog) return <div className="text-white text-center mt-20">Loading...</div>;

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight mb-4">
                        {blog.title}
                    </h1>
                    <p className="text-gray-400 text-center text-lg">
                        By <span className="text-white font-semibold">{blog.author}</span> • {blog.date}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="prose prose-invert lg:prose-lg max-w-none">
                    <p className="text-gray-300 text-lg mb-8">{blog.excerpt}</p>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-auto rounded-lg mb-8 shadow-lg"
                    />
                    <div className="prose prose-invert lg:prose-lg max-w-none">
                        <p>{blog.content}</p>
                    </div>

                </div>

                {/* Tags Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-sm px-4 py-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 transition-colors duration-300"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to Blogs Button */}
            <div className="text-center">
                <a
                    href="/blogs"
                    className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 mb-10"
                >
                    Back to Blogs
                </a>
            </div>
        </div>
    );
};

export default BlogDetail;
