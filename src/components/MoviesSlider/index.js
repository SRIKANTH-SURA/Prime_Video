import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {movieDetails} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.categoryId} movieData={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
