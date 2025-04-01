/** @format */

export interface Log {
    title: string;
    data: any;
    color?: string;
    disable?: boolean;
    handler?: () => void;
}
export type Handler<V> = (...args: any[]) => Promise<V> | V;
