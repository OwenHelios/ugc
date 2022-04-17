import 'styles/Card.css'
import {
  FiThumbsUp,
  FiBookmark,
  FiMessageSquare,
  FiZoomIn,
  FiDelete,
} from 'react-icons/fi'
import { useState } from 'react'
import ImageModal from './ImageModal'
import { useAppDispatch } from 'typedhooks'
import { deletePost } from 'posts/postSlice'

interface Props {
  imageSrc?: string
  title: string
  createdAt?: string
  postId?: string
}

const Card: React.FC<Props> = ({ imageSrc, title, createdAt, postId }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  const dispatch = useAppDispatch()
  return (
    <div className="card">
      <div className="text-content">
        <h3 className="title">
          {createdAt
            ? title +
              ' POSTED AT ' +
              new Date(createdAt).toLocaleString('en-US')
            : title}
        </h3>
        {!imageSrc && (
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            incidunt ea dicta nihil animi voluptatem exercitationem perferendis
            assumenda quasi?
          </p>
        )}
      </div>
      {imageSrc && (
        <div className="image-content">
          <img src={imageSrc} alt="unsplash weekly" />
          <div className="image-overlay">
            <button
              className="image-zoom-in"
              onClick={() => setModalOpen(true)}
            >
              <i>
                <FiZoomIn />
              </i>
            </button>
          </div>
        </div>
      )}
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
        {postId && (
          <button onClick={() => dispatch(deletePost(postId))}>
            <i>
              <FiDelete />
            </i>
          </button>
        )}
      </div>
      {imageSrc && modalOpen && (
        <ImageModal
          imageSrc={imageSrc}
          modalOpen={modalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default Card
