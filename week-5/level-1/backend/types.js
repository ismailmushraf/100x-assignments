const z = require('zod');

const BusinessCardSchema = z.object({
    name: z.string(),
    bio: z.string(),
    social: z.array(
        z.object({
            platform: z.string(),
            link: z.string().url(),
        })
    ),
    interests: z.array(z.string())
});

module.exports = { BusinessCardSchema };
