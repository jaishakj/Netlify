import React, { useState, useEffect } from 'react';
import { Play, Info, ChevronDown, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900">
      <Navbar isScrolled={isScrolled} />
      <Billboard />
      
      <div className="pb-40">
        <MovieRow 
          title="Trending Now"
          movies={[
            { id: 1, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format", title: "Movie 1" },
            { id: 2, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format", title: "Movie 2" },
            { id: 3, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format", title: "Movie 3" },
            { id: 4, image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500&auto=format", title: "Movie 4" },
            { id: 5, image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format", title: "Movie 5" }
          ]}
        />
        
        <MovieRow 
          title="Popular on Netflix"
          movies={[
            { id: 6, image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500&auto=format", title: "Movie 6" },
            { id: 7, image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format", title: "Movie 7" },
            { id: 8, image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=500&auto=format", title: "Movie 8" },
            { id: 9, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format", title: "Movie 9" },
            { id: 10, image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format", title: "Movie 10" }
          ]}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;