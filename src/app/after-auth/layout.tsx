// bg-gradient-to-bl from-gray-900 via-purple-900 to-gray-900

export default function AfterAuthPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
