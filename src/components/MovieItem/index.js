import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieData} = props
  const {thumbnailUrl, videoUrl} = movieData
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        // className="popup-content"
      >
        {close => (
          <>
            <div className="video-container">
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} controls width="100%" />
              </div>
            </div>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
