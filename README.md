# svelte-control-addin

Create [Microsoft Business Central Control Addins](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object) using [Svelte](https://svelte.dev/).

## Motivation

Writing Control Addins is hard and error prone, especially because there is no bundler, which makes it hard to use npm libraries. You have to manually update the DOM, and there is no type checking of any kind. This makes it easy to write buggy code, that breaks when you least expect it.
This project aims to make it trivial to build Control Addins using Svelte. With this template you don't have to worry about the compatibility issues, all you have to do is write your Svelte app like you normally would, and once you've built it, you'll have a `index.js` and `index.css` that can be used directly in your Control Addin.

## Commands

### `build`

Builds your Svelte app using rollup and writes the output to `dist/index.js` and `dist/index.css`.

### `watch`

Same as build, but watches for any changes and rebuilds automatically, useful when developing.

