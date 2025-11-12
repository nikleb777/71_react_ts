import { useState, type ChangeEvent } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { Wrapper, InputsBlock, ResultBlock, ResultText } from "./styles";

export default function Homework09() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(e.target.value);
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondValue(e.target.value);
  };

  const handleShow = () => {
    setIsShow(true);
  };

  return (
    <Wrapper>
      <InputsBlock>
        <Input
          name="first-input"
          label="Первое поле"
          placeholder="Введите значение"
          id="first-input-id"
          value={firstValue}
          onChange={handleFirstChange}
        />
        <Input
          name="second-input"
          label="Второе поле"
          placeholder="Введите значение"
          id="second-input-id"
          value={secondValue}
          onChange={handleSecondChange}
        />
        <Button name="Показать" onClick={handleShow} />
      </InputsBlock>

      <ResultBlock isShow={isShow}>
        <ResultText>{firstValue || "-"}</ResultText>
        <ResultText>{secondValue || "-"}</ResultText>
      </ResultBlock>
    </Wrapper>
  );
}
