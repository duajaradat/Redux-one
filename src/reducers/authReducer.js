import {
  USER_REGISTER,
  NOT_USER_REGISTER,
  USER_LOGIN_SUCCESS,
} from "../actions/actionVariables";

const initState = {
  user: {
    username: "",
    email: "",
    password: "",
    image: "",
    bio: null,
    token: "",
  },
  errors: {},
};

const authorization = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USER_REGISTER:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case NOT_USER_REGISTER:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};
export default authorization;
