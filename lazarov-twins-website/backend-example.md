# Stripe Integration Backend Implementation

This guide shows how to implement the backend endpoints needed for your **production-ready** Stripe integration.

## Required Dependencies

```bash
npm install stripe express cors dotenv
```

## Environment Variables

Create a `.env` file in your backend:

```env
STRIPE_SECRET_KEY=sk_live_your_live_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
FRONTEND_URL=https://yourdomain.com
```

**⚠️ Important:** Use your **live** Stripe keys for production, not test keys.

## Backend Code Example (Node.js/Express)

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Create Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { line_items, customer_email, metadata } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      customer_email: customer_email,
      success_url: `${process.env.FRONTEND_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
      metadata: metadata,
      automatic_tax: {
        enabled: true,
      },
      // Optional: Collect shipping address if needed
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES'],
      },
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Retrieve Checkout Session (for order success page)
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer']
    });

    res.json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook handler for Stripe events
app.post('/api/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Payment successful:', session);
        
        // Fulfill the order (send email, create user account, etc.)
        fulfillOrder(session);
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({received: true});
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

async function fulfillOrder(session) {
  // TODO: Implement order fulfillment
  // - Send confirmation email
  // - Create user account if needed
  // - Grant access to digital products
  // - Update database
  // - Generate download links
  console.log('Fulfilling order for session:', session.id);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

## Frontend Integration

1. **Update your Stripe publishable key** in `src/utils/stripe.ts`:
```typescript
const stripePromise = loadStripe('pk_live_YOUR_LIVE_PUBLISHABLE_KEY');
```

2. **Set your backend URL** in the API calls:
```typescript
const response = await fetch('https://yourdomain.com/api/create-checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(sessionData),
});
```

## Testing Before Going Live

Use Stripe's test mode first:
- Test keys: `pk_test_...` and `sk_test_...`
- Test card: `4242 4242 4242 4242`
- Test decline: `4000 0000 0000 0002`

## Production Deployment

1. **Replace test keys with live keys**
2. **Set up webhook endpoint** in Stripe Dashboard:
   - Go to Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhook`
   - Select events: `checkout.session.completed`, `payment_intent.payment_failed`

3. **Security checklist:**
   - ✅ Use HTTPS in production
   - ✅ Validate webhook signatures
   - ✅ Implement proper CORS policies
   - ✅ Never expose secret keys in frontend
   - ✅ Validate all input data
   - ✅ Add rate limiting
   - ✅ Use environment variables for secrets

## Error Handling

Add proper error handling for common scenarios:
- Network failures
- Invalid payment methods
- Declined cards
- Expired sessions
- Webhook signature verification failures

Your L-Twins fitness website is now ready for **real payments**! 🚀💪 