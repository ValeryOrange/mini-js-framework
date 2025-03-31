interface EventHandler {
    event: string;
    handler: (event: Event) => void;
};

type ElemNodeProps = Record<string, string | undefined> & {
    children?: Node[];
    eventHandlers?: EventHandler[];
};

interface ElemNode {
    tag: keyof HTMLElementTagNameMap;
    props?: ElemNodeProps;
};

type TextNode = string;

type Node = ElemNode | TextNode;

class ReactiveNodes {
    private root: HTMLElement;
    private config: Node;
  
    constructor(root: HTMLElement, config: ElemNode) {
        this.root = root;
        this.config = this.createReactiveNodeTree(config);
        this.render();
    }

    private createReactiveNodeTree(config: Node): Node {
        if (typeof config === 'string') {
            return config;
        }
        if (!config.tag) {
            throw new Error('Tag is required');
        }

        if (config.props?.children) {
            config.props.children = config.props.children.map(child => 
                this.createReactiveNodeTree(child),
            );
        }
        return new Proxy(config, {
            set: (target: ElemNode, prop, value) => {
                if (prop && prop === 'tag') {
                    target.tag = value as keyof HTMLElementTagNameMap;
                } else if (prop && prop === 'props' && !isObjectEmpty(value)) {
                    target.props = value as ElemNodeProps;
                    if (value.children) {
                        value.children = value.children.map((child: Node) => this.createReactiveNodeTree(child));
                    }
                }
                this.render();
                return true;
            },
        });
    }
  
    private createElement(nodeElem: Node): HTMLElement | Text {
        if (typeof nodeElem === 'string') {
            return document.createTextNode(nodeElem);
        }
        const element = document.createElement(nodeElem.tag);
        if (nodeElem.props) {

            // set attributes for the element
            Object.entries(nodeElem.props).forEach(([key, value]) => {
                if (key === 'children' || key === 'eventHandlers') {
                    return;
                }
                element.setAttribute(key, value as string);
            });

            // Handle event handlers
            if (nodeElem.props.eventHandlers && nodeElem.props.eventHandlers.length) {
                nodeElem.props.eventHandlers.forEach(({ event, handler }) => {
                    element.addEventListener(event, handler);
                });
            }

            // render children
            if (nodeElem.props.children) {
                nodeElem.props.children.forEach(child => element.appendChild(this.createElement(child)));
            }
        }
        return element;
    }
  
    private render() {
        this.root.innerHTML = '';
        this.root.appendChild(this.createElement(this.config));
    }
}

function isObjectEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export default function createApp(root: HTMLElement, config: ElemNode) {
    return new ReactiveNodes(root, config);
}
