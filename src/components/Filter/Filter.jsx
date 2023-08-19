import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Clear } from 'components';
import { setFilter } from 'store/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ handleChangeInputFilter }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  console.log('filter :>> ', filter);
  const handleChangeFilter = filter => dispatch(setFilter(filter));
  // console.log('handleChangeFilter :>> ', handleChangeFilter);
  return (
    <FilterLabel onClick={handleChangeInputFilter}>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        maxLength="22"
        placeholder=""
        id="filter"
        autoFocus
        onChange={e => handleChangeFilter(e.target.value.toLowerCase())}
      />
      <Clear type="button">Clear</Clear>
    </FilterLabel>
  );
};

// export const Filter = ({ handleChangeInputFilter }) => {
//   return (
//     <FilterLabel
//       onChange={handleChangeInputFilter}
//       onClick={handleChangeInputFilter}
//     >
//       Find contacts by name
//       <FilterInput
//         type="text"
//         name="filter"
//         maxLength="22"
//         placeholder=""
//         id="filter"
//         autoFocus
//       />
//       <Clear type="button">Clear</Clear>
//     </FilterLabel>
//   );
// };

Filter.propTypes = {
  handleChangeInputFilter: PropTypes.func.isRequired,
};
