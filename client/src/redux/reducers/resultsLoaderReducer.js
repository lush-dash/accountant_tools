import { CLOSE_LOADER, OPEN_LOADER } from '../types';

export default function resultsLoaderReducer(state = false, action) {
  const { type } = action;
  switch (type) {
    case OPEN_LOADER:
      return true;
    case CLOSE_LOADER:
      return false;
    default:
      return state;
  }
}
