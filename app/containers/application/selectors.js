import { createSelector } from 'reselect';

const selectCountryManagementState = state => state.countryManagement;

const selectGetCountryDistance = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceStatus,
);

const selectGetCountryDistanceSuccess = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceResponse,
);

const selectGetCountryDistanceError = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceError,
);


const selectGetClosestCountry = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectClosestCountryStatus,
);

const selectGetClosestCountrySuccess = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectClosestCountryStatusResponse,
);

const selectGetClosestCountryError = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectClosestCountryStatusError,
);

const selectGetTimezoneCountries = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectTimezoneCountriesStatus,
);

const selectGetTimezoneCountriesSuccess = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectTimezoneCountriesResponse,
);

const selectGetTimezoneCountriesError = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectTimezoneCountriesError,
);

export {
    selectGetCountryDistance,
    selectGetCountryDistanceSuccess,
    selectGetCountryDistanceError,
    selectGetClosestCountry,
    selectGetClosestCountrySuccess,
    selectGetClosestCountryError,
    selectGetTimezoneCountries,
    selectGetTimezoneCountriesSuccess,
    selectGetTimezoneCountriesError,

};
