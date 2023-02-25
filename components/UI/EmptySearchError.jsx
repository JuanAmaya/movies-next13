import Image from "next/image";
import noPoster from "../../public/imgs/No_poster.jpg";

export default function EmptySearchError() {
  return (
    <div className="max-w-fit mx-auto mt-8 select-none">
      <div
        className={
          "h-36 px-6 rounded-2xl text-center drop-shadow-xl relative overflow-hidden tvShutDown flex items-center"
        }
      >
        <div className="crt">
          <h2 className="text-red-800 text-2xl relative">Error</h2>
          <span className="text-4xl font-bold capitalize text-orange-50">
            Movie not found
          </span>
          <div className="opacity-30 top-1 w-full h-full left-0 absolute">
            <Image
              className="w-full object-cover h-64 blur-sm"
              src={noPoster}
              alt="Not movie found"
              width={1000}
              height={720}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
