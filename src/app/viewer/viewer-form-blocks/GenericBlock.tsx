
export default function GenericBlock({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="p-8 border-t-2 m-0">
        {children}
      </div>
    );
  }
  