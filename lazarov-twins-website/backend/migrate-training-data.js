const { query } = require('./database');

// Training programs data (copied from your frontend)
const trainingPrograms = [
  {
    "id": 1,
    "title": "Beginner's Full-Body Foundation",
    "body": "Start your fitness journey here. This program focuses on compound movements like squats, push-ups, and rows to build a solid strength and muscle base across your entire body. Perfect for new gym-goers.",
    "image": "https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "ratings": {
      "1": 3,
      "2": 8,
      "3": 15,
      "4": 45,
      "5": 67
    },
    "new": true,
    "salesCount": 120
  },
  {
    "id": 2,
    "title": "Intermediate Strength Focus: Powerlifting Basics",
    "body": "Ready to lift heavier? This program introduces the core principles of powerlifting. Focus on increasing your squat, bench press, and deadlift numbers with structured sets and reps designed for pure strength.",
    "image": "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "ratings": {
      "1": 1,
      "2": 2,
      "3": 8,
      "4": 25,
      "5": 45
    },
    "new": false,
    "salesCount": 95
  },
  {
    "id": 3,
    "title": "Advanced Muscle Building: High Volume Training",
    "body": "Take your muscle-building to the next level with this high-volume training approach. Features advanced techniques like drop sets, supersets, and strategic overreaching phases for maximum muscle growth.",
    "image": "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "gain muscle",
    "price": 49.99,
    "ratings": {
      "1": 0,
      "2": 1,
      "3": 5,
      "4": 20,
      "5": 35
    },
    "new": false,
    "salesCount": 75
  },
  {
    "id": 4,
    "title": "Beginner Strength & Size: Best of Both Worlds",
    "body": "Want both strength and muscle? This program combines the best of both worlds with compound movements for strength paired with accessory work for muscle building. Perfect balance for beginners.",
    "image": "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "both",
    "price": 34.99,
    "ratings": {
      "1": 2,
      "2": 5,
      "3": 12,
      "4": 38,
      "5": 55
    },
    "new": false,
    "salesCount": 88
  },
  {
    "id": 5,
    "title": "Intermediate Muscle Building: Progressive Overload Focus",
    "body": "Master the art of progressive overload with this intermediate muscle-building program. Learn how to systematically increase intensity to continue making gains when beginner programs stop working.",
    "image": "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 42.99,
    "ratings": {
      "1": 1,
      "2": 3,
      "3": 10,
      "4": 28,
      "5": 40
    },
    "new": false,
    "salesCount": 102
  },
  {
    "id": 6,
    "title": "Advanced Powerlifting: Competition Prep",
    "body": "Serious about competing in powerlifting? This advanced program prepares you for competition with periodized training, technique refinement, and peak performance strategies.",
    "image": "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "gain strength",
    "price": 59.99,
    "ratings": {
      "1": 0,
      "2": 0,
      "3": 3,
      "4": 15,
      "5": 25
    },
    "new": false,
    "salesCount": 45
  },
  {
    "id": 7,
    "title": "Intermediate Strength & Muscle: Dual Phase Training",
    "body": "Can't decide between strength or muscle? This program alternates between strength-focused and hypertrophy-focused phases to help you achieve both goals effectively over time.",
    "image": "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "both",
    "price": 44.99,
    "ratings": {
      "1": 1,
      "2": 2,
      "3": 8,
      "4": 22,
      "5": 35
    },
    "new": false,
    "salesCount": 78
  },
  {
    "id": 8,
    "title": "Advanced Functional Strength & Aesthetics",
    "body": "Combine functional movement patterns with aesthetic muscle building. This advanced program integrates athletic performance with physique development for the complete athlete.",
    "image": "https://images.pexels.com/photos/1431281/pexels-photo-1431281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 54.99,
    "ratings": {
      "1": 0,
      "2": 1,
      "3": 4,
      "4": 18,
      "5": 30
    },
    "new": false,
    "salesCount": 62
  },
  {
    "id": 9,
    "title": "Beginner Muscle Building: Volume & Consistency",
    "body": "Focus on building your first significant amount of muscle with this beginner-friendly program. Emphasizes proper form, consistency, and progressive volume increases for sustainable muscle growth.",
    "image": "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 32.99,
    "ratings": {
      "1": 4,
      "2": 7,
      "3": 18,
      "4": 42,
      "5": 65
    },
    "new": true,
    "salesCount": 140
  },
  {
    "id": 10,
    "title": "Starting Strength: The Foundational Program",
    "body": "The classic program for beginners looking to get strong. Focus on linear progression with core barbell exercises. Your main goal is to add more weight to the bar every session.",
    "image": "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "ratings": {
      "1": 6,
      "2": 15,
      "3": 30,
      "4": 60,
      "5": 90
    },
    "new": false,
    "salesCount": 115
  }
];

async function migrateTrainingPrograms() {
  try {
    console.log('🚀 Starting training program migration...');
    
    // Clear existing data (optional)
    await query('DELETE FROM program_reviews');
    await query('DELETE FROM training_programs');
    console.log('🧹 Cleared existing program data');
    
    // Insert training programs
    for (const program of trainingPrograms) {
      await query(`
        INSERT INTO training_programs (
          id, title, description, price, experience_level, goal, 
          image_url, is_new, is_featured, sales_count
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [
        program.id,
        program.title,
        program.body,
        program.price,
        program.experienceLevel,
        program.goal,
        program.image,
        program.new,
        program.salesCount > 100, // Mark high-selling programs as featured
        program.salesCount
      ]);
      
      // Insert ratings as individual review records
      for (let rating = 1; rating <= 5; rating++) {
        const count = program.ratings[rating] || 0;
        for (let i = 0; i < count; i++) {
          await query(`
            INSERT INTO program_reviews (program_id, rating, review_text, is_verified_purchase)
            VALUES ($1, $2, $3, $4)
          `, [
            program.id,
            rating,
            `Migrated ${rating}-star rating`, // Placeholder review text
            true
          ]);
        }
      }
      
      console.log(`✅ Migrated: ${program.title}`);
    }
    
    // Reset sequence to continue from ID 11
    await query('SELECT setval(\'training_programs_id_seq\', 10, true)');
    
    console.log('');
    console.log('🎉 Migration completed successfully!');
    console.log(`📊 Migrated ${trainingPrograms.length} training programs`);
    
    // Show summary
    const programCount = await query('SELECT COUNT(*) FROM training_programs');
    const reviewCount = await query('SELECT COUNT(*) FROM program_reviews');
    
    console.log(`📋 Database now contains:`);
    console.log(`   💪 ${programCount.rows[0].count} training programs`);
    console.log(`   ⭐ ${reviewCount.rows[0].count} reviews/ratings`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
migrateTrainingPrograms(); 