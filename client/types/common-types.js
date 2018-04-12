// @flow
export type GetState = () => Object
// export type Dispatch = <A>(action: A | Function) => A | Promise<void>
// export type ThunkAction = (dispatch: Dispatch, getState: GetState) => Promise<void>

type __ReturnType<B, F: (...any)=> B | Promise<B>> = B
export type $ReturnType<F> = __ReturnType<*, F>
