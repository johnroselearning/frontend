export default function PageLayout({ title, children }) {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
}
