import { CLOSE_LOADER, OPEN_LOADER } from '../types';

export const openLoader = () => ({ type: OPEN_LOADER });
export const closeLoader = () => ({ type: CLOSE_LOADER });
