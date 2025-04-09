export default ({ env }) => ({
  host: env('DATABASE_HOST', '0.0.0.0'), // Listen on all network interfaces
  port: env.int('DATABASE_PORT', 1337),   // Default Strapi port
  app: {
    keys: env.array('APP_KEYS'), // Required for session encryption
  },
  // Add these for production:
  url: env('PUBLIC_URL', 'http://localhost:1337'), // Full public URL
  proxy: true, // Enable if behind reverse proxy (like Plesk's nginx)
  emitErrors: false, // Disable stack traces in production
});