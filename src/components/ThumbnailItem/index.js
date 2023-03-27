import './index.css'

const ThumbnailItem = props => {
  const {obj, isActive, func} = props
  const {id, imageUrl, imageAltText, thumbnailAltText, thumbnailUrl} = obj

  const imgClick = () => {
    func(id, imageUrl, imageAltText)
  }

  const activeClassName = isActive(id) ? 'active' : ''

  return (
    <li className="list">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbImg ${activeClassName}`}
          onClick={imgClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
