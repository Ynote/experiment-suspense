# Experiment Suspense

> Experiment from November 2018

This is a small project that intends to test [React
Suspense](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense)
lazy feature that has been released with [React
16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html).

## Steps

### Create a React app with asynchronous data
- Fetch data from Instagram: some ugly code without any security logic (¯\_(ツ)_/¯ it's an experiment!_).
- Create differents components to use dynamic imports: `Gallery`, `ImageCard` and `Image`.

### Use `React.lazy` to import lazily some components
- Handle [traditionnal `src` lazy loading](https://github.com/Ynote/experiment-suspense/blob/master/src/ImageCard.js#L26) in `ImageCard` component.
- [Import `Gallery`](https://github.com/Ynote/experiment-suspense/blob/master/src/App.js#L4) only when the pictures from Instagram are fetched:
  - We have now a less heavy final bundle. The `Gallery` file is removed from it.
  - The [`<Suspense>` component and its `fallback` prop](https://github.com/Ynote/experiment-suspense/blob/master/src/App.js#L66) is not so useful for my purpose, it just renders for the time of the dynamic import.
- Same for the [lazy import of `Image`](https://github.com/Ynote/experiment-suspense/blob/master/src/ImageCard.js#L6) in `ImageCard`.

### Try to use `React.lazy` to fetch data before dynamic import
- Total fail: cf. [Testing PR](https://github.com/Ynote/experiment-suspense/pull/1)

## Usage

Start the app locally:
```
yarn start
```
