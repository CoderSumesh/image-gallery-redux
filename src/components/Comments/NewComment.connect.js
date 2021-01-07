import { connect } from "react-redux";

import { addComment } from "../../store/actions";
import NewComment from './NewComment';

const mapDispatchToProps = (dispatch) => {
    return {
      postComment: (id, comment) => dispatch(addComment(id, comment)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(NewComment);
  