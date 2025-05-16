import { useState } from 'react';
import { Input } from '@heroui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { PasswordInputProps } from './types';

export const PasswordInput = ({ label, name, register, error, className }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      classNames={{
        base: '-mb-[2px]',
        inputWrapper: className,
      }}
      endContent={
        <button type="button" onClick={toggleVisibility}>
          <Icon
            className="pointer-events-none text-2xl text-default-400"
            icon={isVisible ? 'solar:eye-closed-linear' : 'solar:eye-bold'}
          />
        </button>
      }
      label={label}
      placeholder={`Ingresa ${label.toLowerCase()}`}
      type={isVisible ? 'text' : 'password'}
      variant="bordered"
      autoComplete={name === 'password' ? 'new-password' : 'current-password'}
      {...register(name)}
      errorMessage={error}
      isInvalid={!!error}
    />
  );
};