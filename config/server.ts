export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Listen on all network interfaces
  port: env.int('PORT', 1337),   // Default Strapi port
  app: {
    keys: env.array('APP_KEYS'), // Required for session encryption
  },
  // Add these for production:
  url: env('PUBLIC_URL', 'https://tvornicavjencanja.hr'), // Full public URL
  proxy: true, // Enable if behind reverse proxy (like Plesk's nginx)
  emitErrors: false, // Disable stack traces in production
});