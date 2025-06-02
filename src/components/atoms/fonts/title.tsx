interface TitleProps {
  children: string | React.ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-7xl flex gap-2 items-center">{children}</h1>;
};
