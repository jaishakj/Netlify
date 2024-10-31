import React, { useState } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';

const Billboard = () => {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative h-[56.25vw]">
      <img 
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&auto=format"
        alt="Billboard"
      />
      
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          Stranger Things
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
            <Play className="w-4 md:w-7 text-black mr-1" />
            Play
          </button>
          <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
            <Info className="w-4 md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>

      <div className="absolute right-4 bottom-[10%] flex items-center gap-2">
        <button 
          onClick={() => setMuted(prev => !prev)}
          className="bg-gray-900/50 text-white rounded-full p-2 hover:bg-gray-900/80"
        >
          {muted ? <VolumeX className="w-6" /> : <Volume2 className="w-6" />}
        </button>
      </div>
    </div>
  );
};

export default Billboard;