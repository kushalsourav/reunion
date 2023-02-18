import SearchBar from "../SearchBar/SearchBar";
import "./Filter.css";

const Filter = ({data, setData}) => {
    
  return (
    <div className="filter-bar">
        <div className="filter-loc">
            <h5 className="filter-head">Location</h5>
            <select id="location" className="filter" value={data.filters.location} onChange={(e) => {setData({type:"FILTER", location:e.target.value, bed:data.filters.bed, propertyType:data.filters.propertyType})}} >
            <option value="choose location" hidden>choose location</option>
            {data.location.map((locs) => {
                return(
                    <option  value={locs}>{locs}</option>
                )
            })}
            </select>
        </div>
        <div className="filter-beds"  >
            <h5 className="filter-head">beds</h5>
            <select className="filter" value={data.filters.bed} onChange={(e) => {setData({type:"FILTER", location:data.filters.location, bed:e.target.value, propertyType:data.filters.propertyType})}}   >
            <option value="select" hidden>select</option>
            {data.beds.map((locs) => {
                return(
                    <option value={locs}>{locs}</option>
                )
            })}
            </select>
        </div>
        <div className="filter-type">
            <h5 className="filter-head">Property Type</h5>
            <select className="filter" value={data.filters.propertyType} onChange={(e) => {setData({type:"FILTER", location:data.filters.location, bed:data.filters.bed, propertyType:e.target.value})}}>
            <option value="select" hidden>select</option>
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