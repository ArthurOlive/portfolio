interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-purple-600 text-white border-gray-800 border rounded hover:bg-purple-700 flex items-center gap-2 transition-colors duration-300 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonOutiler = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 text-white rounded border-gray-800 border hover:bg-purple-700 flex items-center gap-2 transition-colors duration-300 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};
