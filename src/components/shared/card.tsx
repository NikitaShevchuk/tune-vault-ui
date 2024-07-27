interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ className, children }: Props) {
  return (
    <div
      className={`p-12 backdrop-blur-xl bg-gray-100 bg-opacity-5 rounded-xl shadow-lg ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
