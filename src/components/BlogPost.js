import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import postsData from '../components/posts.json';
import { Carousel } from 'react-bootstrap';
import '../components/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  const post = postsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    import(`../articles/${id}.md`)
      .then((module) => fetch(module.default))
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading markdown:', error));
  }, [id]);

  // to require.context to kanw mono an  id = '10'
  const topContext = id === '10' ? require.context('../assets/carusel1', false, /\.(jpe?g|png)$/) : null;
  const bottomContext = id === '10' ? require.context('../assets/carusel2', false, /\.(jpe?g|png)$/) : null;

  // fortwnw periexomeno
  const topImages = topContext ? topContext.keys().map(topContext) : [];
  const bottomImages = bottomContext ? bottomContext.keys().map(bottomContext) : [];

  return (
    <div className="container mt-5">
      <div className="post-header">
        <div className="post-meta text-end text-muted">
          {post?.author} • {post?.date}
        </div>
        <h1 className="post-title text-center">{post?.title}</h1>
      </div>

      {/* carusel 1 */}
      {id === '10' && topImages.length > 0 && (
        <div className="post-carousel mt-4 mb-5">
          <Carousel interval={null} indicators={false} prevLabel="Προηγούμενο" nextLabel="Επόμενο">
            {topImages.map((image, index) => (
              <Carousel.Item key={`top-${index}`}>
                <img className="d-block w-100" src={image} alt={`Top Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}

      
      <div className="post-content mb-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* carusel 2 */}
      {id === '10' && bottomImages.length > 0 && (
        <div className="post-carousel mt-4 mb-5">
          <Carousel interval={null} indicators={false} prevLabel="Προηγούμενο" nextLabel="Επόμενο">
            {bottomImages.map((image, index) => (
              <Carousel.Item key={`bottom-${index}`}>
                <img className="d-block w-100" src={image} alt={`Bottom Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}

      {/* return button gia arxiki */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">← Επιστροφή στην αρχική</Link>
      </div>
    </div>
  );
};

export default BlogPost;
