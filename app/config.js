const config = {
    tag: 'div',
    props: { 
        class: 'class1',
        id: 'wrapper',
        children: [
            {
                tag: 'h1',
                props: {
                    class: 'header-one',
                    id: 'header',
                    children: ['Hello World'],
                },
            },
            {
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
            },
            {
                tag: 'main',
                props: {
                    class: 'main-class',
                    id: 'main',
                    children: [
                        'This is a main block. The first element after this text node is an empty paragraph.',
                        {
                            tag: 'p',
                        },
                        {
                            tag: 'label',
                            props: {
                                children: [
                                    'Change paragraph text',
                                    {
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
                                    },
                                ],
                            },
                        },
                        {
                            tag: 'ul',
                            props: {
                                class: 'unordered-list',
                                id: 'list',
                                children: [
                                    {
                                        tag: 'li',
                                        props: {
                                            class: 'li1',
                                            id: 'item1',
                                            children: ['Item 1'],
                                        },
                                    }, {
                                        tag: 'li',
                                        props: {
                                            class: 'li2',
                                            id: 'item2',
                                            children: ['Item 2'],
                                        },
                                    },
                                ],
                            },
                        },
                        {
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
                        },
                        {
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
                        },
                        {
                            tag: 'div',
                            props: {
                                children: [
                                    {
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
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        ],
    },
};

export default config;
