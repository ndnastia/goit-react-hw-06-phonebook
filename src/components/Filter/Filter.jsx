
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';


const Filter = () => { 
  
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  
  const onChangeFilter = (event) => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value))
};

  return(
  <div>
    <h4>Find contacts by name</h4>
    <input
      type="text"
      name="filter"
      id="filter"
      value={filtered}
      onChange={onChangeFilter}
      placeholder="Search..."
    />
  </div>
)};



export default Filter;