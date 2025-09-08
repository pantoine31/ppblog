import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../components/posts.json';
import '../components/BlogList.css'; // kanooume import to css arxeio

const BlogList = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">📚 Τα Άρθρα Μου</h1>
      <div className="row">
        
        {postsData.map((post) => (
          <div key={post.id} className="col-md-4 mb-4"> {/* 3 arthra ana seira */}
            <div className="card blog-card shadow-sm border-0 rounded-3">
              {/* Εικόνα */}
              <img 
                src={`${process.env.PUBLIC_URL}${post.image}`} 
                className="card-img-top blog-image" 
                alt={post.title} 
              />
              
              <div className="card-body text-center">
                {/* Τίτλος */}
                <h3 className="blog-title">{post.title}</h3>

                {/* Ημερομηνία */}
                <p className="blog-date text-muted">{post.date}</p>

                {/* Περίληψη */}
                <p className="blog-excerpt">{post.excerpt}</p>

                {/* Κουμπί */}
                <Link to={`/post/${post.id}`} className="btn btn-primary mt-3">
                  Διαβάστε Περισσότερα
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
