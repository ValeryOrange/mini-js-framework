import createApp from '../dist/main.js';
import config from './config.js';

const simpleSecondApp = {
    tag: 'div',
    props: {
        children: [{
            tag: 'hr',
        },'Simple second app with no interactive elements.'],
    },
};

const root = document.getElementById('root');
const secondRoot = document.getElementById('second-root');
createApp(root, config);
createApp(secondRoot, simpleSecondApp);
