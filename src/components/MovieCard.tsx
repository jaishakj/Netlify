import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  movie: {
    image: string;
    title: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-[12vw] min-w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`
          cursor-pointer
          object-cover
          transition
          duration-300
          shadow-xl
          rounded-md
          w-full
          h-[12vw]
          ${isHovered ? 'opacity-90 scale-110' : 'opacity-100 scale-100'}
        `}
        src={movie.image}
        alt={movie.title}
      />

      {isHovered && (
        <div className="
          absolute
          top-0
          left-0
          w-full
          h-full
          z-10
          bg-zinc-800
          bg-opacity-80
          transition
          duration-200
          rounded-md
        ">
          <div className="flex flex-col justify-center h-full gap-3 p-4">
            <div className="flex gap-3">
              <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-200 transition">
                <Play className="w-4 h-4 text-black" fill="currentColor" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition">
                <Plus className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition">
                <ThumbsUp className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition ml-auto">
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-white text-sm">{movie.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;