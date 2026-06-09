import { z } from 'zod';

export const loginSchema = z.object({
	identifier: z.string().min(1, 'Email or username is required'),
	password: z.string().min(6, 'Password must be at least 6 characters')
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
	confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Passwords do not match',
	path: ['confirmPassword']
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const caffeineLogSchema = z.object({
	amount: z.number().min(1, 'Amount must be at least 1mg'),
	timestamp: z.date(),
	notes: z.string().optional()
});

export type CaffeineLogInput = z.infer<typeof caffeineLogSchema>;