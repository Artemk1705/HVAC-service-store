export function PreviewSection({ title, text }) {
  return (
    <div className="back-grad flex flex-col items-center text-white w-screen pb-20 pt-10">
      <h2 className="py-10 text-3xl uppercase text-center">{title}</h2>
      <p className="leading-7 text-center w-1/2 text-lg whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
