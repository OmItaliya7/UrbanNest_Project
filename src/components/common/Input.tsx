import React from "react";

type InputProps = {
  id?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-2 text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
