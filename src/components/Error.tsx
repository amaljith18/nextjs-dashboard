export const Error = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-red-500 text-center">
        <p className="text-xl font-bold">Error</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
