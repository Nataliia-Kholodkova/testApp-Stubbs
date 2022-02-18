import { CREATE_MESSAGE, DELETE_MESSAGE } from '../constants';

const initialState = {
  messages: [
    { id: new Date().getTime(), text: 'Just to order', date: new Date() },
    { id: new Date().getTime() + 1, text: 'Okay, for what level of spiciness?', date: new Date() },
    { id: new Date().getTime() + 2, text: 'Very-very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long message', date: new Date() },
  ],
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case CREATE_MESSAGE:
      newState.messages.push(payload);
      break;
    case DELETE_MESSAGE:
      newState.messages = newState.messages.filter(
        (message) => message.id !== payload
      );
      break;
    default:
      break;
  }
  return newState;
};

export default rootReducer;
