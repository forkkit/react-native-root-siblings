import { ReactNode } from 'react';
export declare function setSiblingWrapper(wrapper: (sibling: ReactNode) => ReactNode): void;
export default class RootSiblingsManager {
    private id;
    constructor(element: ReactNode, callback?: () => void);
    update(element: ReactNode, callback?: () => void): void;
    destroy(callback?: () => void): void;
}
export declare function RootSiblingProtal(props: {
    children: ReactNode;
}): null;
