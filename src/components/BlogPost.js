import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import postsData from '../components/posts.json';
import '../components/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  // Βρίσκουμε τα metadata του άρθρου
  const post = postsData.find((p) => p.id === id);

  useEffect(() => {
    import(`../articles/${id}.md`)
      .then((module) => fetch(module.default))
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading markdown:', error));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="post-header">
        {/* Συγγραφέας και ημερομηνία */}
        <div className="post-meta text-end text-muted">
          {post?.author} • {post?.date}
        </div>

        {/* Τίτλος */}
        <h1 className="post-title text-center">{post?.title}</h1>

        {/* Περίληψη */}
        <p className="post-excerpt">{post?.excerpt}</p>
      </div>

      {/* Περιεχόμενο άρθρου */}
      <div className="post-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Κουμπί επιστροφής */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">← Επιστροφή στην αρχική</Link>
      </div>
    </div>
  );
};

export default BlogPost;
