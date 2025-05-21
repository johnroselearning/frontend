import React from "react";

const BlogSection = () => {
  const posts = [
    {
      title: "🌄 Travel Tips for Kerala",
      content: "Pack light clothes, carry mosquito repellent, and use local transport where possible!"
    },
    {
      title: "🎉 Festivals of Kerala",
      content: "Don't miss Onam and Thrissur Pooram. They show the true culture of Kerala!"
    },
    {
      title: "✍️ Guest Post: My Trip to Munnar",
      content: "Munnar was peaceful, green, and absolutely refreshing. A must-visit hill station!"
    }
  ];

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow my-8">
      <h2 className="text-xl font-bold mb-4">📝 Travel Blog</h2>
      {posts.map((post, i) => (
        <div key={i} className="mb-4">
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
