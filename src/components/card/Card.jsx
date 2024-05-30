import styles from "./Card.module.css";

export default function Card({
  title,
  role,
  description,
  altText,
  imageUrl,
  Url,
  backgroundColor,
}) {
  return (
    <figure
      className={styles.cardContainer}
      style={{ "--box-shadow-color": backgroundColor }}
    >
      <a href={Url} className={styles.imgContainer} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
      <figcaption>
        <h2>
          <a href={Url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <h3>{role}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
