import { connect } from "react-redux";
import ImageCard from './ImageCard'
import { likeImage, unlikeImage } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
    return {
      setLike: (id) => dispatch(likeImage(id)),
      setUnlike: (id) => dispatch(unlikeImage(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(ImageCard);
  