import axios from "axios";
import Button from "components/Button/Button";
import { useState, useEffect } from "react";

import {
  Lesson11Wrapper,
  ImageWrapper,
  AnimalImage,
  ErrorText,
  Spinner,
} from "./styles"


type AnimalResponse = {
  message: string;
  status: string;
};

function Lesson11() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAnimalImege = async () => {
    setError(undefined);
    setIsLoading(true);
    setImageUrl("");

    try {
      const response = await axios.get<AnimalResponse>("https://dog.ceo/api/breeds/image/random");
      setImageUrl(response.data.message);
    } catch (error: any) {
      setError(error.message || "Ошибка при загрузке изображения");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimalImege();
  }, []);

  return (
    <Lesson11Wrapper>
      <h2>Собачий Мир</h2>

      <ImageWrapper>
        {isLoading && <Spinner />}
        {error && <ErrorText>{error}</ErrorText>}
        {!isLoading && !error && imageUrl && (
          <AnimalImage src={imageUrl} alt="Random animal" />
        )}
      </ImageWrapper>
      <Button name="GET MORE IMAGES" onClick={fetchAnimalImege} />
    </Lesson11Wrapper>
  )
}

export default Lesson11;