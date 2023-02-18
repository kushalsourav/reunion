import SearchBar from "../SearchBar/SearchBar";
import "./Filter.css";

const Filter = ({data, setData}) => {
    
  return (
    <div className="filter-bar">
        <div className="filter-loc">
            <select className="filter" value={data.filters.location} onChange={(e) => {setData({type:"FILTER", location:e.target.value, bed:data.filters.bed, propertyType:data.filters.propertyType})}} >
            {data.location.map((locs) => {
                return(
                    <option  value={locs}>{locs}</option>
                )
            })}
            </select>
        </div>
        <div className="filter-beds"  >
            <select className="filter" value={data.filters.bed} onChange={(e) => {setData({type:"FILTER", location:data.filters.location, bed:e.target.value, propertyType:data.filters.propertyType})}}   >
            {data.beds.map((locs) => {
                return(
                    <option value={locs}>{locs}</option>
                )
            })}
            </select>
        </div>
        <div className="filter-type">
            <select className="filter" value={data.filters.propertyType} onChange={(e) => {setData({type:"FILTER", location:data.filters.location, bed:data.filters.bed, propertyType:e.target.value})}}>
            {data.propertyType.map((locs) => {
                return(
                    <option value={locs}>{locs}</option>
                )
            })}
            </select>
        </div>
        <button className="filter-reset" onClick={() => {setData({type:"FILTER", location:"", bed:"", propertyType:""})}} >reset</button>
        <SearchBar filterText={data.search} setData={setData} />
    </div>
  );
};

export default Filter;