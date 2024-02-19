// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickChange = () => {
    updateActiveImageId(id)
  }

  const itsInActiveMode = isActive ? 'active-img' : ''

  return (
    <li>
      <button type="button" className="button" onClick={onClickChange}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`img ${itsInActiveMode}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
