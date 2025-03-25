import React from 'react'

const MovieCard = ({ movie: 
    { Title, vote_average, Poster, Year, original_language } 
}) => {
  return (
    <div className='movie-card'>
        <img 
            src={Poster ? 
                Poster : '/no-movie.png'} 
            alt={Title} 
        />

        <div className='mt-4'>
            <h3>{Title}</h3>
            <div className='content'>
                <div className='rating'>
                    <img src="star.svg" alt="Star Icon" />
                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                </div>
                <span>•</span>
                <p className='lang'>{original_language}</p>

                <span>•</span>
                <p className='year'>
                    {Year ? Year : 'N/A'}
                </p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard