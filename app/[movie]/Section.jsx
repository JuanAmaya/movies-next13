export default function Section({ title, content }) {
  return (
    <div className="max-w-screen-lg mx-auto mb-12">
      <h2 className="text-3xl ml-4 mb-4 font-bold text-amber-600">{title}</h2>
      {content}
    </div>
  );
}
