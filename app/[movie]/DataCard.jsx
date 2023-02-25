export default function DataCard({
  title,
  movieData,
  iconD,
  bgColor,
  cardW,
  fontSize,
}) {
  return (
    <div
      className={`${bgColor} ${
        cardW ? cardW : "w-40"
      } pb-6 px-2 rounded-2xl text-center drop-shadow-xl relative m-auto overflow-hidden tvShutDown`}
    >
      <div className="crt">
        <h2 className="text-slate-800 pt-1">{title}</h2>
        <span className={`text-2xl font-bold ${fontSize}`}>{movieData}</span>
        <div className="opacity-30 absolute top-1 w-full h-full flex justify-center items-center left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconD} />
          </svg>
        </div>
      </div>
    </div>
  );
}
