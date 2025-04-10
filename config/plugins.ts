module.exports = ({ env }) => ({
    ckeditor: {
        enabled: true,
    },
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
});
