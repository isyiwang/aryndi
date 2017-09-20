// @flow

export type TReduxDispatch<A,S> = (action: A | TReduxThunkAction<A,S> | TReduxPromiseAction<A>) => any;
type TReduxGetState<S> = () => S;
type TReduxThunkAction<A,S> = (dispatch: TReduxDispatch<A,S>, getState: TReduxGetState<S>) => any;
type TReduxPromiseAction<A> = Promise<A>;
