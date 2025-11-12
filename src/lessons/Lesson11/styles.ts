import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Lesson11Wrapper = styled.div`
  ${boxBasicStyles}
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(209, 231, 245, 1);
  font-size: 28px;
`;

export const ImageWrapper = styled.div`
  ${boxBasicStyles}
  width: 350px;
  height: 350px;
  background: white;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ErrorText = styled.div`
  color: red;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid rgba(40, 15, 86, 1);
  border-radius: 50%;

`;