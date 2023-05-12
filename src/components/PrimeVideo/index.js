import './index.css'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        className="banner-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="app-main-container">
        <div className="carousel-container">
          <h1>Action Movies</h1>
          <MovieSlider movieDetails={actionMoviesList} />
        </div>
        <div className="carousel-container">
          <h1>Comedy Movies</h1>
          <MovieSlider movieDetails={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
