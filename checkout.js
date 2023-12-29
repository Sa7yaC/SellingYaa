// This is your test publishable API key.
const stripe = Stripe("pk_test_51O2dHVSIcsTIQQ2WDGBs9EpN7FNUyPqtCNzMfqewCrQxjQ7d4tF6nQPBML5OJrhw3YldEZhDAautEmdmprVCB2lz005DeCoxwq");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}