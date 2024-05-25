"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "../../types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        No songs available | Supabase&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 128 128"
          className="inline"
        >
          <defs>
            <linearGradient
              id="deviconSupabase0"
              x1={53.974}
              x2={94.163}
              y1={54.974}
              y2={71.829}
              gradientTransform="translate(29.387 60.096)scale(1.1436)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#249361"></stop>
              <stop offset={1} stopColor="#3ecf8e"></stop>
            </linearGradient>
            <linearGradient
              id="deviconSupabase1"
              x1={36.156}
              x2={54.484}
              y1={30.578}
              y2={65.081}
              gradientTransform="translate(29.387 60.096)scale(1.1436)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0}></stop>
              <stop offset={1} stopOpacity={0}></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#deviconSupabase0)"
            d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
            transform="translate(-27.722 -60.338)"
          ></path>
          <path
            fill="url(#deviconSupabase1)"
            fillOpacity={0.2}
            d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
            transform="translate(-27.722 -60.338)"
          ></path>
          <path
            fill="#3ecf8e"
            d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
          ></path>
        </svg>
        &nbsp;Instance Paused
      </div>
    );
  }

  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
    >
      {songs.map((item) => (
        <SongItem
          onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
