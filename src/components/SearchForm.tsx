import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import WeatherData from "../store/weatherData";

//type AppEventListener<T> = (event: T) => void;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    padding-left: 10px;
    border: none;
    border-radius: 5px;
    width: 80%;
    opacity: 0.5;

    &:focus {
      border: 2px solid red;

      opacity: 0.7;
    }
  }
`;

interface SearchFormProps {
  placeholder: string;
  //  handleSubmitForm(event: React.FormEvent<HTMLFormElement>): void,
}

const SearchForm: React.FC<SearchFormProps> = observer(
  (props: SearchFormProps) => {
    let [inputValue, setValue] = useState("");

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleSubmitForm = (
      event: React.FormEvent<HTMLFormElement>
    ): void => {
      event.preventDefault();

      if (inputValue.trim()) {
        setValue((inputValue = ""));
      }
    };

    return (
      <Form onSubmit={handleSubmitForm}>
        <input
          value={inputValue}
          placeholder={props.placeholder}
          onChange={getInputValue}
        />
        <Link to="/weather">
          <button onClick={() => WeatherData.getWeather(inputValue)}>
            Check
          </button>
        </Link>
      </Form>
    );
  }
);

export default SearchForm;
