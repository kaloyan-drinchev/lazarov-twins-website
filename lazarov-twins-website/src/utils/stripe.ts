import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe TEST publishable key
// Get it from: https://dashboard.stripe.com → Developers → API keys
// For testing: pk_test_...
// For production: pk_live_...
const stripePromise = loadStripe('pk_test_YOUR_TEST_PUBLISHABLE_KEY_HERE');

export { stripePromise }; 