"use client"
import React from 'react';
import { useFormContext } from 'react-hook-form';


  interface SelectProps {
    name: string;
    label: string;
    options: { value: string | number; label: string }[];
  }

  
  interface InputProps {
    name: string;
    label: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  
  const TextInput: React.FC<InputProps> = ({ name, label, type = 'text', onChange }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
  
  
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-normal text-[16px]">
          {label}*
        </label>
  
          <input
            id={name}
            type={type}
            {...register(name)}
            onChange={(e) => {
              if (onChange) onChange(e);
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
  
        {errors[name] && (
          <span className="text-red text-sm">{(errors[name] as any).message}</span>
        )}
      </div>
    );
  };
  

const SelectInput: React.FC<SelectProps> = ({ name, label, options }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}:
            </label>
            <select
                id={name}
                {...register(name)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && <span className="text-red text-sm">{(errors[name] as any).message}</span>}
        </div>
    );
};


export { TextInput, SelectInput };