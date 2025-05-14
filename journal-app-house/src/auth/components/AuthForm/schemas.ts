import { z } from 'zod';

export const baseSchema = z.object({
  email: z.string().email('Correo electrónico inválido').nonempty('El correo es requerido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').nonempty('La contraseña es requerida'),
});

export const registerSchema = baseSchema.extend({
  username: z.string().min(3, 'El nombre de usuario debe tener al menos 3 caracteres').nonempty('El nombre de usuario es requerido'),
  confirmPassword: z.string().min(8, 'La confirmación debe tener al menos 8 caracteres').nonempty('La confirmación es requerida'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

export const loginSchema = baseSchema;