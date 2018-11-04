# Experiment Suspense

> Experiment from November 2018

This is a small project that intends to test [React
Suspense](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense)
lazy feature that has been released with [React
16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html).

## Results :memo:

- `React.lazy` coupled with `Suspense` is great for performance purpose.
- **I am looking forward to test the fetchers from the future!** (cf. https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)
- Instagram API is a mess: 
  - there are few endpoints (you cannot even fetch the last pictures of a specific user, except yourself!),
  - the sandbox usage is really restritive.

## Steps

### Create a React app with asynchronous data
- Fetch data from Instagram: some ugly code without any security logic (¯\_(ツ)_/¯ it's an experiment!_).
- Create differents components to anticipate dynamic imports: `Gallery`, `ImageCard` and `Image`.

### Use `React.lazy` to import lazily some components
- Handle [traditionnal `src` lazy loading](https://github.com/Ynote/experiment-suspense/blob/master/src/ImageCard.js#L26) in `ImageCard` component.
- [Import `Gallery`](https://github.com/Ynote/experiment-suspense/blob/master/src/App.js#L4) only when the pictures from Instagram are fetched:
  - We have now a less heavy final bundle. The `Gallery` file is removed from it.
  - The [`<Suspense>` component and its `fallback` prop](https://github.com/Ynote/experiment-suspense/blob/master/src/App.js#L66) is not so useful for my purpose, it just renders for the time of the dynamic import.
- Same for the [lazy import of `Image`](https://github.com/Ynote/experiment-suspense/blob/master/src/ImageCard.js#L6) in `ImageCard`.

### Try to use `React.lazy` to fetch data before dynamic import 
- Total fail: cf. [Testing PR](https://github.com/Ynote/experiment-suspense/pull/1) :boom:

## Requirements

- React 16.6
- Having an Instagram account (with some pictures) and a developer app linked to it

## Usage

Start the app locally:
```
yarn start
```
