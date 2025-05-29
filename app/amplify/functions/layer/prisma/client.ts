// // src/layers/prisma/client.ts

// import { PrismaClient } from '@prisma/client';
// export const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       // hardcoded connection string for simplicity
//       url: process.env.DATABASE_URL,
//     },
//   },
// });
// export const createPost = async (title: string, content: string) => {
//   return prisma.post.create({
//     data: {
//       title,
//       content,
//       published: true,
//     },
//   });
// }
// export const getPost = async (id: string) => {
//   return prisma.post.findUnique({
//     where: {
//       id,
//     },
//   });
// }
