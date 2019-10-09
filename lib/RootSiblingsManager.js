import { useEffect, useState } from 'react';
import { AppRegistry } from 'react-native';
import ChildrenWrapper from './ChildrenWrapper';
import wrapRootComponent from './wrapRootComponent';
let siblingWrapper = sibling => sibling;
function renderSibling(sibling) {
    return siblingWrapper(sibling);
}
if (!global.__rootSiblingsInjected && !global.__rootSiblingsDisabled) {
    AppRegistry.setWrapperComponentProvider(() => {
        return Root;
    });
    global.__rootSiblingsInjected = true;
}
export function setSiblingWrapper(wrapper) {
    siblingWrapper = wrapper;
}
const { Root, manager } = wrapRootComponent(ChildrenWrapper, renderSibling);
let uuid = 0;
export default class RootSiblingsManager {
    constructor(element, callback) {
        this.id = `root-sibling-${uuid + 1}`;
        manager.update(this.id, element, callback);
        uuid++;
    }
    update(element, callback) {
        manager.update(this.id, element, callback);
    }
    destroy(callback) {
        manager.destroy(this.id, callback);
    }
}
export function RootSiblingProtal(props) {
    const [sibling, setSibling] = useState(null);
    if (!sibling) {
        setSibling(new RootSiblingsManager(props.children));
    }
    else {
        sibling.update(props.children);
    }
    useEffect(() => {
        if (sibling) {
            return () => sibling.destroy();
        }
    }, [sibling]);
    return null;
}
//# sourceMappingURL=RootSiblingsManager.js.map