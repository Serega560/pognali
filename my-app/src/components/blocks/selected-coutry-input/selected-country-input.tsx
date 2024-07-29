import { letterArray } from "../../../const";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { changeChoosenCountry, removeChoosenCountry, setLetter } from "../../../store/app-slice";
import { useGetCountriesNamesQuery } from "../../../store/countries-api";
import { CountriesToChange, Country } from "../../../types";



type SelectedCoutriesInputProps = {
    selectedCountry: Country;
}

export const SelectedCountryInput = ({ selectedCountry }: SelectedCoutriesInputProps) => {
    const dispatch = useAppDispatch();
    const choosenLetter = useAppSelector(state => state.appSlice.choosenLetter);
    const { data: filteredCountries, isLoading } = useGetCountriesNamesQuery(choosenLetter);
    const handleSelectCountryInputClick = (newCountry: Country): void => {
        const countriesToChange: CountriesToChange = {
            currentCountry: selectedCountry,
            newCountry: newCountry
        };
        dispatch(changeChoosenCountry(countriesToChange));
    }

    return (
        <div className="step__country">
            <div className={`step__input-container `}>
                <input value={selectedCountry.name}
                    // onClick={() => dispatch(setIsSelectCountryInputActive())}
                    onClick={(evt) => {
                        console.log(evt.target);
                        evt.currentTarget.closest('div')?.classList.toggle('active');
                        // dispatch(setIsSelectCountryInputActive());
                    }}
                >

                </input>
                <div className="step__country-list-wrapper">
                    <ul className="route__letters-list">
                        {letterArray.map((letter: string, index: number) => {
                            return (
                                <li className="step__letter-item" key={index}>
                                    <button className={`step__letter-button ${choosenLetter === letter ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => dispatch(setLetter(letter))}>{letter}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    <ol className="step__search-results-list">
                        {isLoading && <div>Loading...</div>}
                        {filteredCountries?.map((country: Country) => {
                            return (
                                <li className="step__search-results-item"
                                    key={country.name}
                                    onClick={(evt) => {
                                        handleSelectCountryInputClick(country);
                                        evt.currentTarget.closest('.step__input-container')?.classList.remove('active');
                                    }}>{country.name}</li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <div className="step__indicator">
                <img className="step__flag" src={selectedCountry.flag} alt="country flag image" />
                <button className="step__button" type="button"
                    onClick={() => dispatch(removeChoosenCountry(selectedCountry))}></button>
            </div>
        </div>
    )
};