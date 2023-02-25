"use client";

export default function ArrowButton({ iconD, onClick, posX }) {
  return (
    <div
      onClick={onClick}
      className={`bg-black/50 w-fit h-fit py-6 flex items-center justify-center absolute top-1/4 ${posX}`}
    >
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconD} />
      </svg>
    </div>
  );
}
