import { ReactNode } from 'react';
export declare enum RootControllerChanges {
  Insert = 0,
  Update = 1,
  Remove = 2
}
interface RootControllerAction {
  change: RootControllerChanges;
  element: ReactNode;
  updateCallback?: () => void;
}
export default class RootController {
  private siblings;
  private pendingActions;
  private callback;
  public update(id: string, element: ReactNode, callback?: () => void): void;
  public destroy(id: string, callback?: () => void): void;
  public setCallback(
    callback: (id: string, action: RootControllerAction) => void
  ): void;
  private emit;
}
export {};
