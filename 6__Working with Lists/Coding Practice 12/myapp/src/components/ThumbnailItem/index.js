import './index.css'

const ThumbnailItem = (props) => {
  const {imageDetails, updateThumbnail, isActive } = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  
  const onclickButton = () => {
    updateThumbnail(id)
  }

  const activeBtn = isActive ? 'active' : 'thumbnail-img'

  return (
    <li className='thumbnail-item'>
      <button type='button' className='thumbnail-button' onClick={onclickButton}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={`thumbnail-img ${activeBtn}`}/>
      </button>
    </li>
  )
}

export default ThumbnailItem