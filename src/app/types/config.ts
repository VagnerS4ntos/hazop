import { z } from 'zod';


export const userDatabaseSchema = z.object({
  CHAVE: z.string(),
  MATRICULA: z.string(),
  NOME_COMPLETO: z.string(),
});

export type userDatabaseT = z.infer<typeof userDatabaseSchema>;

export const userSchema = z.object({
  users: z.array(userDatabaseSchema),  
  getUsersDatabase: z.function({
	input: z.array(z.array(userDatabaseSchema)),
	output: z.void()
  })
});

export type userStateT = z.infer<typeof userSchema>;
