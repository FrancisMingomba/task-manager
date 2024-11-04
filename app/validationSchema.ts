import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Tilte is required.').max(255),
  description: z.string().min(1, 'Description is required.')
});