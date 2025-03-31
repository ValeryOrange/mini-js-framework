// element nodes
const header = {
    tag: 'h1',
    props: {
        class: 'header-one',
        id: 'header',
        children: ['Hello World'],
    },
};

const inputHeader = {
    tag: 'label',
    props: {
        children: [
            'Change main header',
            {
                tag: 'input',
                props: {
                    eventHandlers: [
                        {
                            event: 'change',
                            handler: (e) => {
                                const value = e.target.value;
                                let header = config.props?.children?.[0];
                                if (header) {
                                    header.props = {
                                        ...header.props,
                                        children: [value],
                                    };
                                }
                            },
                        },
                    ],
                },
            },
        ],
    },
};

const bgButton = {
    tag: 'label',
    props: {
        children: [
            'Change background color of the main block',
            {
                tag: 'input',
                props: {
                    eventHandlers: [
                        {
                            event: 'change',
                            handler: (e) => {
                                const value = e.target.value;
                                let main = config.props?.children?.[2];
                                if (main) {
                                    main.props = {
                                        ...main.props,
                                        style: `background-color: ${value};`,
                                    };
                                }
                            },
                        },
                    ],
                },
            },
        ],
    },
};

const bgChangerBlock = {
    tag: 'div',
    props: {
        children: [bgButton],
    },
};

const removeLastListItemButton = {
    tag: 'button',
    props: {
        class: 'button-class',
        id: 'button',
        children: ['Remove last list item'],
        eventHandlers: [
            {
                event: 'click',
                handler: () => {
                    const list = config.props?.children?.[2].props?.children?.[3];
                    if (list) {
                        list.props.children.pop();
                        list.props = {
                            ...list.props,
                            children: list.props.children,
                        };
                    }
                },
            },
        ],
    },
};

const addListItemButton = {
    tag: 'button',
    props: {
        class: 'button-class',
        id: 'button',
        children: ['Add list item'],
        eventHandlers: [
            {
                event: 'click',
                handler: () => {
                    const list = config.props?.children?.[2].props?.children?.[3];
                    if (list) {
                        const counter = list.props?.children?.length || 0;
                        list.props.children.push({
                            tag: 'li',
                            props: {
                                class: `li${counter}`,
                                id: `item${counter}`,
                                children: [`Item ${counter + 1}`],
                            },
                        });
                        list.props = {
                            ...list.props,
                            children: list.props.children,
                        };
                    }
                },
            },
        ],
    },
};

const firstListItem = {
    tag: 'li',
    props: {
        class: 'li1',
        id: 'item1',
        children: ['Item 1'],
    },
};

const secondListItem = {
    tag: 'li',
    props: {
        class: 'li2',
        id: 'item2',
        children: ['Item 2'],
    },
};

const listWrapper = {
    tag: 'ul',
    props: {
        class: 'unordered-list',
        id: 'list',
        children: [
            firstListItem,
            secondListItem,
        ],
    },
};

const changeParagraphInput = {
    tag: 'input',
    props: {
        eventHandlers: [
            {
                event: 'change',
                handler: (e) => {
                    const value = e.target.value;
                    let paragraph = config.props?.children?.[2].props?.children?.[1];
                    if (paragraph?.tag === 'p') {
                        paragraph.props = {
                            ...paragraph.props,
                            children: [value],
                        };
                    }
                },
            },
        ],
    },
};

const labelParagraphInput = {
    tag: 'label',
    props: {
        children: [
            'Change paragraph text',
            changeParagraphInput,
        ],
    },
};

const emptyParagraph = {
    tag: 'p',
};

const main = {
    tag: 'main',
    props: {
        class: 'main-class',
        id: 'main',
        children: [
            'This is a main block. The first element after this text node is an empty paragraph.',
            emptyParagraph,
            labelParagraphInput,
            listWrapper,
            addListItemButton,
            removeLastListItemButton,
            bgChangerBlock,
        ],
    },
};

const config = {
    tag: 'div',
    props: { 
        class: 'class1',
        id: 'wrapper',
        children: [
            header,
            inputHeader,
            main,
        ],
    },
};

export default config;
