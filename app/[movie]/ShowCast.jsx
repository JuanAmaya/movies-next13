"use client";

import { useState } from "react";
import Cast from "./Cast";

export default function ShowCast({ data }) {
  const [castSize, setCastSize] = useState(4);

  const showAllCast = () => {
    setCastSize(data.length);
  };

  const showLessCast = () => {
    setCastSize(4);
  };

  return (
    <div className="mx-auto grid gap-4 justify-center grid-cols-cards mt-6 max-w-screen-xl">
      {data.slice(0, castSize).map((data) => (
        <Cast
          key={data.cast_id}
          id={data.cast_id}
          characterName={data.character}
          realName={data.name}
          profile_path={data.profile_path}
        />
      ))}
      {castSize !== data.length && data.length > 4 && (
        <button
          onClick={showAllCast}
          className={"self-baseline justify-self-center"}
        >
          <Cast
            key={123}
            id={123}
            characterName={"Show"}
            realName={"all"}
            icon_path={"M12 4.5v15m7.5-7.5h-15"}
          />
        </button>
      )}
      {castSize === data.length && data.length > 4 && (
        <button
          onClick={showLessCast}
          className={"self-baseline justify-self-center"}
        >
          <Cast
            key={123}
            id={123}
            characterName={"Show"}
            realName={"less"}
            icon_path={"M19.5 12h-15"}
          />
        </button>
      )}
    </div>
  );
}
