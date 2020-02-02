import { combineReducers } from "redux";
import { companyLoginReducer } from './companyLoginReducer'
import { jobSeekerReducer} from './jobSeekerReducer'




export default combineReducers({
  companyLoginReducer,
  jobSeekerReducer
});