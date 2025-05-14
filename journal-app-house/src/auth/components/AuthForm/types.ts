export type FormType = 'Login' | 'Register';

export interface AuthFormProps {
  typeForm: FormType;
  onSubmit?: (data: FormData) => void;
}

export interface FormData {
  email: string;
  password: string;
  username?: string;
  confirmPassword?: string;
}

export interface PasswordInputProps {
  label: string;
  name: keyof FormData;
  register: ReturnType<typeof import('react-hook-form').useForm<FormData>>['register'];
  error?: string;
  className?: string;
  autoComplete?: string;
}