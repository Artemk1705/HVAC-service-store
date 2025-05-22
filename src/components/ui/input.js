export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className="placeholder-gray-600 w-100 h-10 bg-white my-4 px-4 rounded-lg text-gray-900"
    />
  );
}
