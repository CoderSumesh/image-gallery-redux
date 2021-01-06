import reducer from "../reducer";
import * as actionTypes from "../actions";
import data from './data';

describe("Reducer", () => {
  let initialStore;

  beforeEach(() => {
    
    initialStore = {
        isLoading: true,
        images: data.pics,
        sortType: "",
        searchText: "",
    };
  
  });

});