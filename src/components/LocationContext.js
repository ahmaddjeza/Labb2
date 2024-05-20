import React, { createContext, useReducer } from 'react';

const LocationContext = createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, { location: 'Stockholm' });

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
