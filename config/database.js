module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_PUBLIC_URL')
        },
        debug: true,
        pool: { min: 0, max: 7 },
    }
});