export function InfoSectionList({ title, image, tag, text, sectionIndex }) {
  const isEven = sectionIndex % 2 === 0;

  const sectionStyles = isEven
    ? "bg-white text-neutral-900 flex-row"
    : "bg-neutral-900 text-white flex-row-reverse";

  return (
    <div className={`w-screen py-10 ${isEven ? "" : "bg-neutral-900"}`}>
      <div className={`flex items-center justify-around ${sectionStyles}`}>
        <img
          className="w-2/5 h-auto object-cover rounded-lg shadow-md"
          src={image}
          alt={tag}
        />
        <div className="w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-10">{title}</h2>
          <div className="space-y-3 pb-10">
            <div className="text-lg">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
