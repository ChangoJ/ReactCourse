import { z } from 'zod';

export const journalSchema = z.object({
  title: z.string().min(3, 'Debe tener al menos 3 caracteres').nonempty('Titulo es requerido'),
  body: z.string().min(5, 'Debe tener al menos 5 caracteres').nonempty('La descripción es requerida'),
  date: z.string().optional(),
});



