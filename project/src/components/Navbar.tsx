import React from 'react';
import { Search, Clapperboard } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard className="w-8 h-8 text-red-500" />
          <span className="text-white font-bold text-2xl">CinematicHub</span>
        </div>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-gray-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex gap-6">
          <button className="text-white hover:text-red-500 transition-colors">Movies</button>
          <button className="text-white hover:text-red-500 transition-colors">TV Shows</button>
          <button className="text-white hover:text-red-500 transition-colors">Watchlist</button>
        </div>
      </div>
    </nav>
  );
}