import Image from "next/image";
import { useState } from "react";
import WallaceLoading from "../../components/UI/WallaceLoading";
import { motion } from "framer-motion";
import noPoster from "/public/imgs/No_posterL.png";

export default function Movie({
  id,
  characterName,
  realName,
  profile_path,
  icon_path,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [imageReady, setImageReady] = useState(false);

  let latestImg;
  if (profile_path === null) {
    latestImg = noPoster;
  } else {
    latestImg = imagePath + profile_path;
  }

  const imageLoaded = () => {
    setImageReady(true);
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div
      className="relative flex justify-center overflow-hidden max-w-max rounded-xl select-none justify-self-center"
      whileHover="hover"
    >
      <div>
        <div className="flex justify-center">
          <div className="h-44 w-44 rounded-4xl max-w-max flex justify-center">
            {profile_path !== undefined && (
              <Image
                src={latestImg}
                width={200}
                height={200}
                alt={characterName}
                className="rounded-4xl pointer-events-none object-cover bg-neutral-900"
                onLoad={imageLoaded}
              />
            )}
            {icon_path !== undefined && (
              <div className="h-44 w-44 rounded-4xl bg-neutral-900 flex">
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-28 h-28 m-auto text-amber-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={icon_path}
                    />
                  </svg>
                }
              </div>
            )}
          </div>
          {/* {!imageReady && <WallaceLoading />} */}
        </div>
        <div className="flex flex-col text-center drop-shadow-2xl mx-auto left-0 right-0 ">
          <span className="text-2xl w-full font-bold">{characterName}</span>
          <span className="text-lg w-full">{realName}</span>
        </div>
      </div>
    </div>
  );
}
