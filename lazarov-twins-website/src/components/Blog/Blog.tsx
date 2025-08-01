import React, { useState, useMemo } from 'react';
import './Blog.css';
import { type BlogPost, mockBlogPosts } from '../../data/blogData';



const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({
    'overtrain-naturals': 284,
    'dense-training-principle': 392, 
    'meal-timing-muscle-growth': 156,
    'natural-cutting-strategies': 203,
    'mindset-transformation': 178,
    'progressive-overload-naturals': 245
  });
  const [userLikes, setUserLikes] = useState<Record<string, boolean>>({});
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  // Categories for filtering
  const categories = ['All', 'Training', 'Nutrition', 'Mindset'];

  // Filter and sort blog posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = mockBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort posts
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
      case 'featured':
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  // Get featured posts
  const featuredPosts = mockBlogPosts.filter(post => post.featured).slice(0, 2);

  // Open article modal
  const openArticle = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close article modal
  const closeArticle = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Handle likes
  const handleLike = (postId: string) => {
    setUserLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId] + (userLikes[postId] ? -1 : 1)
    }));
  };

  // Share functionality - copy link to clipboard
  const sharePost = (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.id}`;
    
    navigator.clipboard.writeText(url).then(() => {
      showCopiedMessage(post.id);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showCopiedMessage(post.id);
    });
  };

  // Show copied message
  const showCopiedMessage = (postId: string) => {
    setCopiedStates(prev => ({ ...prev, [postId]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [postId]: false }));
    }, 2000);
  };

  // Format blog content for display (convert markdown-like syntax to HTML)
  const formatContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/---/g, '<hr>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(.)/gm, '<p>$1')
      .replace(/(.*)$/gm, '$1</p>')
      .replace(/<p><li>/g, '<ul><li>')
      .replace(/<\/li><\/p>/g, '</li></ul>')
      .replace(/<p><h/g, '<h')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p><hr><\/p>/g, '<hr>');
  };

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <section className="blog-header">
        <div className="blog-header-content">
          <h1 className="blog-title">L Twins Blog</h1>
          <p className="blog-subtitle">
            High-value content for natural bodybuilders. Discover proven strategies for training, nutrition, and mindset transformation.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-posts">
          <div className="section-content">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post">
                  <div className="featured-post-image">
                    <img src={post.image} alt={post.title} />
                    <span className="featured-badge">Featured</span>
                  </div>
                  <div className="featured-post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{new Date(post.publishDate).toLocaleDateString()}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="featured-post-title">{post.title}</h3>
                    <p className="featured-post-excerpt">{post.excerpt}</p>
                    <div className="post-actions">
                      <button className="read-more-btn" onClick={() => openArticle(post)}>Read More</button>
                      <div className="share-container">
                        <button className="share-btn" onClick={() => sharePost(post)}>
                          📋 Copy Link
                        </button>
                        {copiedStates[post.id] && (
                          <span className="copied-message">Copied!</span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="blog-controls">
        <div className="section-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filters">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="sort-controls">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'featured')}
                className="sort-select"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="featured">Featured First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="section-content">
          {filteredAndSortedPosts.length === 0 ? (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <>
              <div className="results-info">
                <p>{filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? 's' : ''} found</p>
              </div>
              <div className="posts-grid">
                {filteredAndSortedPosts.map(post => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      {post.featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-date">{new Date(post.publishDate).toLocaleDateString()}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="tag">#{tag}</span>
                        ))}
                      </div>
                      <div className="post-actions">
                        <button className="read-more-btn" onClick={() => openArticle(post)}>Read More</button>
                        <div className="share-container">
                          <button className="share-btn" onClick={() => sharePost(post)}>
                            📋
                          </button>
                          {copiedStates[post.id] && (
                            <span className="copied-message">Copied!</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-newsletter">
        <div className="newsletter-content">
          <h2>Never Miss an Article</h2>
          <p>Get the latest natural bodybuilding insights delivered straight to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closeArticle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={closeArticle}>
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <div className="article-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
              
              <div className="article-content">
                <div className="article-meta">
                  <div className="meta-row">
                    <span className="category-badge">{selectedPost.category}</span>
                    <span className="publish-date">
                      Published {new Date(selectedPost.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="author">By {selectedPost.author}</span>
                    <span className="read-time">{selectedPost.readTime}</span>
                  </div>
                </div>

                <div 
                  className="article-text" 
                  dangerouslySetInnerHTML={{ __html: formatContent(selectedPost.content) }}
                />

                <div className="article-footer">
                  <div className="article-tags">
                    <h4>Tags:</h4>
                    <div className="tags-list">
                      {selectedPost.tags.map(tag => (
                        <span key={tag} className="article-tag">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="article-engagement">
                    <div className="engagement-stats">
                      <button 
                        className={`like-btn ${userLikes[selectedPost.id] ? 'liked' : ''}`}
                        onClick={() => handleLike(selectedPost.id)}
                      >
                        ❤️ {likes[selectedPost.id]} likes
                      </button>
                      <span className="view-count">👁️ {Math.floor(likes[selectedPost.id] * 4.2)}k views</span>
                    </div>
                    
                    <div className="social-sharing">
                      <h4>Share this article:</h4>
                      <div className="share-buttons">
                        <div className="share-container">
                          <button onClick={() => sharePost(selectedPost)} className="share-copy">
                            📋 Copy Link
                          </button>
                          {copiedStates[selectedPost.id] && (
                            <span className="copied-message">Copied!</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="article-cta">
                    <div className="cta-box">
                      <h3>Want More Content Like This?</h3>
                      <p>Join thousands of natural bodybuilders getting our weekly insights.</p>
                      <div className="cta-actions">
                        <input type="email" placeholder="Enter your email" className="cta-email" />
                        <button className="cta-subscribe">Subscribe Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
