const DataReducer = (state, action) => {
     switch (action.type) {

        case "LOCATION" :
            return {...state, location: action.payload};
        case "BEDS" :
            return {...state, beds: action.payload};
        case "PROPERTY_TYPE" :
            return {...state, propertyType: action.payload};
        case "FILTER" :
            return {...state, filters : {...state.filters , location : action.location, bed: action.bed, propertyType: action.propertyType}};
        case "SEARCH" :
            return {...state, search:action.search};
        default:
            return state;
            
     };
};

export default DataReducer;