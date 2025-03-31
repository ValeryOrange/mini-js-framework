# Mini JS Framework

A lightweight and modular JavaScript framework designed for building modern web applications with simplicity and flexibility.

## Features

- **Lightweight**: Minimal footprint for faster load times.
- **Reactive**: Built-in state management at the root level for dynamic UI updates.
- **JSON-Based**: Renders HTML from a simple JSON.

## Installation

```bash
npm run i
```

## Compile for production

```bash
npm run build
```

## Run a preview locally

```bash
npm run preview
```

## Usage

```javascript
import createApp from 'src/main';

const config = {
    tag: 'h1',
    props: {
        children: ['Hello World'],
    }
};

createApp(document.getElementById('root'), config);
```

## Important notes
1. Reactivity is based on Proxy
1. Render is not smart and re-renders the entire node tree.
1. The framework does not watch the state of each node, only the state of the whole app.
1. Event handlers can be set in the config directly referencing the nodes from the tree.
