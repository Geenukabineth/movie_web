import React from 'react';
import { Play, Plus } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
        <div className="max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Discover Amazing Movies</h1>
            <p className="text-gray-300 text-lg mb-8">
              Explore thousands of movies and TV shows. Keep track of what you want to watch,
              and get personalized recommendations.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
                <Play className="w-5 h-5" />
                Watch Now
              </button>
              <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                <Plus className="w-5 h-5" />
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}