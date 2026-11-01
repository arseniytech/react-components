const images = [
  { src: 'https://picsum.photos/seed/react1/300/200', alt: 'Первая картинка галереи' },
  { src: 'https://picsum.photos/seed/react2/300/200', alt: 'Вторая картинка галереи' },
  { src: 'https://picsum.photos/seed/react3/300/200', alt: 'Третья картинка галереи' },
]

export const ImageGallery = () => {
  return (
    <section className="task-block">
      <div className="gallery">
        {images.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </div>
    </section>
  )
}