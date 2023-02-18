import { useData } from '../../DataContext/DataContext';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import "./Home.css";

const Home = () => {

  const {data, setData} = useData();

  return (
    <div className="home">
          <Filter data={data} setData={setData} />
          <Card property={data.properties} filters={data.filters} filterText={data.search} />
    </div>
  );
};

export default Home;