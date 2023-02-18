import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from "./DataReducer";
import { Properties } from "./Properties/Properties";

const initialState = {
    properties: Properties,
    location:[],
    beds : [],
    propertyType: [],
    filters : {
        location:"",
        propertyType:"",
        bed:""
    },
    search:""
};

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {


    const [data , setData] = useReducer(DataReducer, initialState);
     
    useEffect(() => {
     let locations = data.properties.map((prop) => prop.location);
         locations = [...new Set(locations)];
         setData({type:"LOCATION", payload:locations});
     let beds = data.properties.map((prop) => prop.beds);
         beds = [...new Set(beds)];
         setData({type:"BEDS", payload:beds});
     let propertyType = data.properties.map((prop) => prop.type);
         propertyType = [...new Set(propertyType)];
         setData({type:"PROPERTY_TYPE", payload:propertyType});
    },[data.properties]);


    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData}