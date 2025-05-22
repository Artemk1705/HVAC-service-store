export function Conclusion({ text }) {
  if (!text) return null;

  return (
    <div className="service_text_container">
      <div className="mt-10 text-xl font-semibold text-green-700">{text}</div>
    </div>
  );
}
