import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from "../action-types";
export interface AuthState {

}

export const initialAuthState: AuthState = {

}
export const reducers: ActionReducerMap<AuthState> = {

};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
)
