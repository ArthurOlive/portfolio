export const Button = ({
  children,
}: {
  children: string | React.ReactNode;
}) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 transition-colors duration-300 cursor-pointer">
      {children}
    </button>
  );
};

export const ButtonOutiler = ({
  children,
}: {
  children: string | React.ReactNode;
}) => {
  return (
    <button className="px-4 py-2 text-white rounded border-gray-800 border hover:bg-blue-500 flex items-center gap-2 transition-colors duration-300 cursor-pointer">
      {children}
    </button>
  );
};
