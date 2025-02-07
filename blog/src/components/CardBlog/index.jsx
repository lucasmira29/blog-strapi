import './CardBlog.css';

function CardBlog({ blogContent }) {

  if (!blogContent) return null;

  const imageSrc = blogContent.image[0].formats?.medium?.url;

  return (
    <div className="card">
      <img src={"http://localhost:1337" + imageSrc} alt={blogContent.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{blogContent.title}</h2>
        <p className="card-description">{blogContent.description}</p>
      </div>
    </div>
  );
}

export default CardBlog;