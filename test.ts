type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type PartialRequired<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

type Nullable<T> = T | null;


console.log("12");