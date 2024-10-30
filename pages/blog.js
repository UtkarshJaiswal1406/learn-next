import React from 'react';
import 'tailwindcss/tailwind.css';

const Blog = () => {
    const posts = [
        { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
        { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
    ];

    return (
        <div>
            <h1 className='text-3xl'>Blog</h1>
            <br/>
            {posts.map(post => (
                <div key={post.id}>
                    <h2 className='text-2xl'>{post.title}</h2>
                    <p>{post.content}</p>
                    <br/>
                </div>
            ))}
        </div>
    );
};

export default Blog;