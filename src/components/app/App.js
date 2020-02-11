import React, { useEffect, useState } from 'react';
import { fetchPopular, fetchFeatured } from '../../actions/app-actions';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../carousel/carousel';
import Tile from '../tile/tile';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
    dispatch(fetchFeatured())
  }, [dispatch]);

  const [searchText, updateSearchText] = useState('');

  const { popular, featured } = useSelector(state => state.appReducer);

  const renderPopular = () => {
    const filteredItems = popular.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    const popularItems = filteredItems.map(item => <Tile {...item} key={item.title}/>);
    return (!popularItems.length ? 'No results' : <Carousel slides={popularItems} />);
  };

  const handleSearch = event => {
    updateSearchText(event.target.value);
  };

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handleSearch}
      />
      <div className="app-content">
        <section>
          <h3>Popular around you</h3>
          {
            renderPopular()
          }
        </section>
        <section>
          <h3>Featured</h3>
          <div className="featured">
          {
            featured.map(item => <Tile {...item} key={item.title} />)
          }
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
