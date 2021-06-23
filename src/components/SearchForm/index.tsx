import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import s from './SearchForm.module.css';

import WeatherData from '../../store/weatherData';

//type AppEventListener<T> = (event: T) => void;

interface SearchFormProps {
    placeholder: string, 
  //  handleSubmitForm(event: React.FormEvent<HTMLFormElement>): void,
}

const SearchForm: React.FC<SearchFormProps> = observer((props: SearchFormProps) => {

    let [inputValue, setValue] = useState('');
    
    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(inputValue.trim()) {           
            setValue(inputValue = '');
        }
    }

    return (
        <>
            <form className={ s.form } onSubmit={ handleSubmitForm }>
                <input 
                    value = { inputValue }
                    className={ s.input } 
                    placeholder={ props.placeholder }
                    onChange={ getInputValue }
            
                />
                <Link to="/weather"> 
                    <button onClick={() => WeatherData.getWeather(inputValue)}>Check</button> 
                </Link>
            </form>
        </>
    )
});

export default SearchForm;