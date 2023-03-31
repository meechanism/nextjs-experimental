const Card = ({ children }: any) => {
  return <div className="bg-gray-50 px-8 py-10 rounded-md">{children}</div>;
};

export const CardHeader = ({ children }: any) => {
  return <h4 className="font-medium text-gray-700 text-lg mb-4">{children}</h4>;
};

export const CardBody = ({ Component = 'p', children }: any) => {
  return (
    <Component className="font-normal text-gray-500 text-md">
      {children}
    </Component>
  );
};
export default Card;
