const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require('./database');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://54.86.169.71',
      'https://54.86.169.71',
      'http://lazarovtwins.com',
      'https://lazarovtwins.com',
    ],
    credentials: true,
  })
);
app.use(express.json());

// Import routes
const programRoutes = require('./routes/programs');

// Use routes
app.use('/api/programs', programRoutes);

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Create Checkout Session - REAL STRIPE VERSION
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    console.log('✅ Received checkout session request');
    console.log('📦 Cart items:', req.body.line_items?.length || 0);
    console.log('👤 Customer:', req.body.customer_email);

    // Check if we have Stripe secret key
    const stripeSecretKey =
      process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_TEST_KEY_HERE';

    if (stripeSecretKey === 'sk_test_YOUR_TEST_KEY_HERE') {
      // Demo mode - no real Stripe key
      console.log('🎭 Demo mode: No Stripe key configured');
      const demoSession = {
        id: 'cs_demo_' + Math.random().toString(36).substring(7),
      };

      setTimeout(() => {
        res.json(demoSession);
      }, 1000);
      return;
    }

    // Real Stripe integration
    const stripe = require('stripe')(stripeSecretKey);
    console.log('💳 Creating real Stripe session...');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.line_items,
      mode: 'payment',
      customer_email: req.body.customer_email,
      success_url: req.body.success_url,
      cancel_url: req.body.cancel_url,
      metadata: req.body.metadata,
    });

    console.log('🎉 Real Stripe session created:', session.id);
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('❌ Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Retrieve Checkout Session - REAL STRIPE VERSION
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    console.log('📋 Retrieving session:', sessionId);

    // Check if it's a demo session
    if (sessionId.startsWith('cs_demo_')) {
      const demoSession = {
        id: sessionId,
        customer_email: 'demo@ltwinsfitness.com',
        amount_total: 9900, // $99.00 in cents
        payment_status: 'paid',
        metadata: {
          customer_name: 'Demo Customer',
          customer_address: '123 Demo Street',
        },
      };
      res.json(demoSession);
      return;
    }

    // Real Stripe session retrieval
    const stripeSecretKey =
      process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_TEST_KEY_HERE';

    if (stripeSecretKey === 'sk_test_YOUR_TEST_KEY_HERE') {
      res.status(400).json({ error: 'Stripe not configured' });
      return;
    }

    const stripe = require('stripe')(stripeSecretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    res.json(session);
  } catch (error) {
    console.error('❌ Error retrieving session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', async () => {
  console.log('🚀 L-Twins Backend Server Started!');
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);

  // Test database connection
  await testConnection();

  // Check Stripe configuration
  const stripeKey =
    process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_TEST_KEY_HERE';
  if (stripeKey === 'sk_test_YOUR_TEST_KEY_HERE') {
    console.log('🎭 Running in DEMO mode');
    console.log('💡 To enable real Stripe payments:');
    console.log(
      '   1. Create .env file with: STRIPE_SECRET_KEY=sk_test_your_key'
    );
    console.log('   2. Update frontend: src/utils/stripe.ts');
    console.log('   3. Restart both servers');
  } else {
    console.log('💳 Real Stripe integration enabled!');
  }

  console.log('');
  console.log('Next steps:');
  console.log('1. Keep this server running');
  console.log('2. Start your frontend: npm run dev');
  console.log('3. Test the checkout flow!');
});
