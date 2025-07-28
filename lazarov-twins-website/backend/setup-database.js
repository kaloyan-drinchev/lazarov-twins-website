const fs = require('fs');
const { query } = require('./database');

async function setupDatabase() {
  try {
    console.log('🚀 Setting up L-Twins Fitness database...');
    
    // Read the SQL schema file
    const schemaSQL = fs.readFileSync('./database_schema.sql', 'utf8');
    
    // Execute the schema
    await query(schemaSQL);
    
    console.log('✅ Database schema created successfully!');
    console.log('📋 Tables created:');
    console.log('   👥 users');
    console.log('   💪 training_programs');
    console.log('   📋 program_details');
    console.log('   ⭐ program_reviews');
    console.log('   🛒 orders');
    console.log('   📦 order_items');
    console.log('   🔐 user_program_access');
    console.log('   📊 user_progress');
    console.log('');
    console.log('🎉 Your database is ready for the fitness app!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

// Run the setup
setupDatabase(); 