import { Auction, AppState } from '../interfaces';

const initialState: AppState = {
  name: 'React TS'
}

export default (state = initialState, { type, payload }: Auction): AppState => {
  switch (type) {
    case 'TEST':
      return {...state, ...payload}
    default:
      return state
  }
}