import { CREATE_MESSAGE, DELETE_MESSAGE } from '../constants';

const initialState = {
  messages: [
    { id: new Date().getTime(), text: 'hello', date: new Date() },
    { id: new Date().getTime() + 1, text: 'There are!!!', date: new Date() },
    { id: new Date().getTime() + 2, text: 'Hi', date: new Date() },
  ],
};

const rootReducer = (action, state = initialState) => {
  const newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case CREATE_MESSAGE:
      newState.messages.push(payload);
      break;
    case DELETE_MESSAGE:
      newState.messages = newState.messages.filter(
        (message) => message.id !== payload,
      );
      break;
    default:
      break;
  }
  return newState;
};

export default rootReducer;
