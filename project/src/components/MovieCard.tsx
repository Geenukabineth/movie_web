import React from 'react';
import { Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  rating: number;
  imageUrl: string;
  year: number;
  onClick: () => void;
}

export function MovieCard({ title, rating, imageUrl, year, onClick }: MovieCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className="aspect-[2/3] w-full">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg line-clamp-2">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white">{rating.toFixed(1)}</span>
            <span className="text-gray-300 ml-2">({year})</span>
          </div>
        </div>
      </div>
    </div>
  );
}