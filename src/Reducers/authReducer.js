import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../Actions/types';

// Reducer to have everything to do with Authentication
const INITIAL_STATE = { 
  email: '', 
  password: '',
  user: null,
  error: '',
  loading: false
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log(action.payload);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log(action.payload);
      return { ...state, password: action.payload };
    case LOGIN_USER:
      console.log('loading');
      return { ...state, loading: true };
    case LOGIN_USER_FAIL:
      console.log(action.payload, 'tried to log in but failed');
      return { ...state, error: 'Authentication Failed!', loading: false };
    case LOGIN_USER_SUCCESS:
      console.log('Login Successful');
      return { INITIAL_STATE };
    default:
      return state;
  }
};
