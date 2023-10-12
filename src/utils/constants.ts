export enum CacheKeys {
    CHAPTERS = 'chapters',
    VERSE = 'verse',
}

export const Config = {
    redisPassword: process.env.REDIS_PASSWORD,
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
}
