import { Component, ReactChild, ReactNode } from 'react';
import RootController from './RootController';
interface RootSiblingsProps {
  controller: RootController;
  renderSibling?: (sibling: ReactNode) => ReactNode;
  children: ReactChild;
}
interface RootSiblingsState {
  siblings: Array<{
    id: string;
    element: ReactNode;
  }>;
}
export default class extends Component<RootSiblingsProps, RootSiblingsState> {
  private updatedSiblings;
  private siblingsPool;
  constructor(props: RootSiblingsProps);
  public componentDidMount(): void;
  public componentDidUpdate(): void;
  public render(): JSX.Element;
  private invokeCallback;
  private renderSiblings;
  private wrapSibling;
}
export {};
