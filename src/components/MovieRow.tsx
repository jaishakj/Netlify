import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  image: string;
  title: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 md:px-16 mt-4 space-y-8">
      <div className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </div>
      
      <div className="group relative">
        <ChevronLeft 
          className="w-9 h-9 text-white absolute top-[35%] left-2 z-40 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition"
          onClick={() => scroll('left')}
        />
        
        <div 
          ref={scrollRef}
          className="flex gap-2 overflow-x-hidden scroll-smooth"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        <ChevronRight 
          className="w-9 h-9 text-white absolute top-[35%] right-2 z-40 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition"
          onClick={() => scroll('right')}
        />
      </div>
    </div>
  );
};

export default MovieRow;