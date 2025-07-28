const express = require('express');
const { query } = require('../database');
const router = express.Router();

// Get all training programs with ratings
router.get('/', async (req, res) => {
  try {
    const result = await query(`
      SELECT 
        tp.*,
        COALESCE(AVG(pr.rating), 0) as average_rating,
        COUNT(pr.id) as total_reviews,
        COUNT(CASE WHEN pr.rating = 1 THEN 1 END) as rating_1,
        COUNT(CASE WHEN pr.rating = 2 THEN 1 END) as rating_2,
        COUNT(CASE WHEN pr.rating = 3 THEN 1 END) as rating_3,
        COUNT(CASE WHEN pr.rating = 4 THEN 1 END) as rating_4,
        COUNT(CASE WHEN pr.rating = 5 THEN 1 END) as rating_5
      FROM training_programs tp
      LEFT JOIN program_reviews pr ON tp.id = pr.program_id
      GROUP BY tp.id
      ORDER BY tp.sales_count DESC
    `);

    // Transform data to match frontend format
    const programs = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      body: row.description,
      image: row.image_url,
      experienceLevel: row.experience_level,
      goal: row.goal,
      price: parseFloat(row.price),
      ratings: {
        1: parseInt(row.rating_1),
        2: parseInt(row.rating_2),
        3: parseInt(row.rating_3),
        4: parseInt(row.rating_4),
        5: parseInt(row.rating_5)
      },
      new: row.is_new,
      salesCount: row.sales_count,
      averageRating: parseFloat(row.average_rating),
      totalReviews: parseInt(row.total_reviews)
    }));

    res.json(programs);
  } catch (error) {
    console.error('Error fetching training programs:', error);
    res.status(500).json({ error: 'Failed to fetch training programs' });
  }
});

// Get single training program by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(`
      SELECT 
        tp.*,
        COALESCE(AVG(pr.rating), 0) as average_rating,
        COUNT(pr.id) as total_reviews,
        COUNT(CASE WHEN pr.rating = 1 THEN 1 END) as rating_1,
        COUNT(CASE WHEN pr.rating = 2 THEN 1 END) as rating_2,
        COUNT(CASE WHEN pr.rating = 3 THEN 1 END) as rating_3,
        COUNT(CASE WHEN pr.rating = 4 THEN 1 END) as rating_4,
        COUNT(CASE WHEN pr.rating = 5 THEN 1 END) as rating_5
      FROM training_programs tp
      LEFT JOIN program_reviews pr ON tp.id = pr.program_id
      WHERE tp.id = $1
      GROUP BY tp.id
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Program not found' });
    }

    const row = result.rows[0];
    const program = {
      id: row.id,
      title: row.title,
      body: row.description,
      image: row.image_url,
      experienceLevel: row.experience_level,
      goal: row.goal,
      price: parseFloat(row.price),
      ratings: {
        1: parseInt(row.rating_1),
        2: parseInt(row.rating_2),
        3: parseInt(row.rating_3),
        4: parseInt(row.rating_4),
        5: parseInt(row.rating_5)
      },
      new: row.is_new,
      salesCount: row.sales_count,
      averageRating: parseFloat(row.average_rating),
      totalReviews: parseInt(row.total_reviews)
    };

    res.json(program);
  } catch (error) {
    console.error('Error fetching training program:', error);
    res.status(500).json({ error: 'Failed to fetch training program' });
  }
});

// Get program reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(`
      SELECT 
        pr.*,
        CASE 
          WHEN u.first_name IS NOT NULL 
          THEN u.first_name || ' ' || LEFT(u.last_name, 1) || '.'
          ELSE 'Anonymous User'
        END as reviewer_name
      FROM program_reviews pr
      LEFT JOIN users u ON pr.user_id = u.id
      WHERE pr.program_id = $1
      ORDER BY pr.created_at DESC
      LIMIT 50
    `, [id]);

    const reviews = result.rows.map(row => ({
      id: row.id,
      rating: row.rating,
      reviewText: row.review_text,
      reviewerName: row.reviewer_name,
      isVerifiedPurchase: row.is_verified_purchase,
      createdAt: row.created_at
    }));

    res.json(reviews);
  } catch (error) {
    console.error('Error fetching program reviews:', error);
    res.status(500).json({ error: 'Failed to fetch program reviews' });
  }
});

// Search training programs
router.get('/search/:query', async (req, res) => {
  try {
    const { query: searchQuery } = req.params;
    
    const result = await query(`
      SELECT 
        tp.*,
        COALESCE(AVG(pr.rating), 0) as average_rating,
        COUNT(pr.id) as total_reviews,
        ts_rank(to_tsvector('english', tp.title || ' ' || tp.description), plainto_tsquery('english', $1)) as rank
      FROM training_programs tp
      LEFT JOIN program_reviews pr ON tp.id = pr.program_id
      WHERE to_tsvector('english', tp.title || ' ' || tp.description) @@ plainto_tsquery('english', $1)
      GROUP BY tp.id
      ORDER BY rank DESC, tp.sales_count DESC
    `, [searchQuery]);

    const programs = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      body: row.description,
      image: row.image_url,
      experienceLevel: row.experience_level,
      goal: row.goal,
      price: parseFloat(row.price),
      new: row.is_new,
      salesCount: row.sales_count,
      averageRating: parseFloat(row.average_rating),
      totalReviews: parseInt(row.total_reviews)
    }));

    res.json(programs);
  } catch (error) {
    console.error('Error searching training programs:', error);
    res.status(500).json({ error: 'Failed to search training programs' });
  }
});

module.exports = router; 