module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'vyU7DCqzKX',
        password: process.env.MYSQL_PASS || 'hQ8gtxIQ9o',
        database: process.env.MYSQL_DB || 'vyU7DCqzKX',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || '',
        port: process.env.REDIS_PORT || 135,
        password: process.env.REDIS_PASS || '',
    }

}