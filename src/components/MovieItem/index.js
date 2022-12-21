// Write your code here
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {eachMovieDetails} = props
  const {thumbnailUrl, videoUrl} = eachMovieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="movies-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-button"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
