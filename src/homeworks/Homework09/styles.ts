import styled from "@emotion/styled";

interface ResultBlockProps {
  isShow: boolean;
}

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #e2e2f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  min-width: 350px;
`;

export const ResultBlock = styled.div<ResultBlockProps>`
  margin-top: 20px;
  padding: 20px 40px;
  min-width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: all 0.3s ease;
`;

export const ResultText = styled.div`
  font-size: 18px;
  color: #333;
`;
