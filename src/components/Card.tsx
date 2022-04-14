import 'styles/Card.css'
import {
  FiThumbsUp,
  FiBookmark,
  FiMessageSquare,
  FiZoomIn,
} from 'react-icons/fi'

interface Props {
  imageSrc: string
}

const Card: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div className="card">
      <div className="text-content">
        <h3 className="title">Unsplash Weekly</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
          incidunt ea dicta nihil animi voluptatem exercitationem perferendis
          assumenda quasi?
        </p>
      </div>
      <div className="image-content">
        <img src={imageSrc} alt="unsplash weekly" />
        <div className="image-overlay">
          <button className="image-zoom-in">
            <i>
              <FiZoomIn />
            </i>
          </button>
        </div>
      </div>
      <div className="buttons">
        <button>
          <i>
            <FiThumbsUp />
          </i>
        </button>
        <button>
          <i>
            <FiMessageSquare />
          </i>
        </button>
        <button>
          <i>
            <FiBookmark />
          </i>
        </button>
      </div>
    </div>
  )
}

export default Card
