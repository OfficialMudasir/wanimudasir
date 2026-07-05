import { useState } from 'react'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const safeImages = images.length > 0 ? images : []
  const activeImage = safeImages[activeIndex] ?? safeImages[0]

  if (!activeImage) {
    return (
      <div className="project-gallery project-gallery--empty">
        <div className="project-gallery__placeholder">
          <i className="bi bi-image" />
          <span>No preview available</span>
        </div>
      </div>
    )
  }

  return (
    <div className="project-gallery">
      <div className="project-gallery__main">
        <img
          key={activeImage}
          src={activeImage}
          alt={`${title} screenshot ${activeIndex + 1}`}
          className="project-gallery__hero-img"
        />
        {safeImages.length > 1 && (
          <div className="project-gallery__counter">
            {activeIndex + 1} / {safeImages.length}
          </div>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="project-gallery__thumbs" role="tablist" aria-label="Project screenshots">
          {safeImages.map((img, index) => (
            <button
              key={img}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`View screenshot ${index + 1}`}
              className={`project-gallery__thumb ${index === activeIndex ? 'project-gallery__thumb--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
