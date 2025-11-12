import "./styles.css";
import type { AnimalCardProps } from "./type";

// Пропс children - может добавлять в компонент целые части контента (JSX)
function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      {children}
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} />
    </div>
  );
}

export default AnimalCard;
