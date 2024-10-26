const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-6">{children}</main>
    </div>
  );
};

export default Layout;
