import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    description: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    description: z.string()
  })
});

export const collections = {
  recipes,
  blog
};