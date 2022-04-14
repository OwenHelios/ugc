import 'styles/Card.css'
import { FiThumbsUp, FiBookmark, FiMessageSquare } from 'react-icons/fi'
const Card = () => {
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
        <img src="unsplash-weekly.jpg" alt="unsplash weekly" />
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
