/** @format */

export type Action<S> = Partial<S> | ((store: S) => S);
export type Handler<S> = (store: S) => void;
