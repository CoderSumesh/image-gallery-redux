import { connect } from "react-redux";

import { searchImage } from "../../store/actions";

import SearchImage from './SearchImage';

const mapDispatchToProps = (dispatch) => {
    return {
      searchImageList: (search) => dispatch(searchImage(search)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(SearchImage);