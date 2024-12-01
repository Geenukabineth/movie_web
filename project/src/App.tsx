import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieCard } from './components/MovieCard';

// Sample movie data (in a real app, this would come from an API)
const MOVIES = [
  {
    id: 1,
    title: "The Grand Adventure",
    rating: 8.9,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=625&q=80"
  },
  {
    id: 2,
    title: "Midnight Mystery",
    rating: 7.8,
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1159&q=80"
  },
  {
    id: 3,
    title: "Urban Tales",
    rating: 8.2,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "The Last Stand",
    rating: 9.1,
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Tomorrow's Promise",
    rating: 8.5,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Eternal Sunshine",
    rating: 7.9,
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1170&q=80"
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieClick = (movieId: number) => {
    console.log(`Movie clicked: ${movieId}`);
    // In a real app, this would navigate to the movie details page
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar onSearch={setSearchQuery} />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Trending Movies</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                imageUrl={movie.imageUrl}
                year={movie.year}
                onClick={() => handleMovieClick(movie.id)}
              />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No movies found matching your search.
            </div>
          )}
        </div>
      </main>

      <footer className="bg-black/95 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 CinematicHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;