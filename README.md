> This project has moved to https://gitlab.com/ynote_hk/experiment-suspense.

# Experiment Suspense

> Experiment from November 2018

This is a small project that intends to test [React
Suspense](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense)
lazy feature that has been released with [React
16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html).

The app needs your permissions to read your [Instagram](https://www.instagram.com/) feed and displays a wall with your last 20 pictures.

## Results :memo:

- `React.lazy` coupled with `Suspense` is great for performance purpose. I can have lighter final bundle and, for big applications, I can deal direcly with code-splitting with React instead of having a complex strategy with [Webpack](https://webpack.js.org/) bundling.
- **I am looking forward to test the fetchers from the future!** (cf. https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html). I tried to [fetch something before my dynamic import](https://github.com/Ynote/experiment-suspense/pull/1), it was a fail.
- Instagram API is a mess: 
  - there are few endpoints (you cannot even fetch the last pictures of a specific user, except yourself!),
  - the sandbox usage is really restritive.


<img width="1420" alt="screen shot 2018-11-04 at 10 46 26" src="https://user-images.githubusercontent.com/548778/47962561-ed51c580-e01e-11e8-924f-a4b348e56a80.png">


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

- [React 16.6](https://www.npmjs.com/package/react/v/16.6.0)
- Having an Instagram account (with [some pictures](https://www.instagram.com/Ynote_hk/)) and a [developer app](https://www.instagram.com/developer/) linked to it

## Usage

Start the app locally:
```
yarn start
```

## Resources

- https://reactjs.org/docs/code-splitting.html#reactlazy
- https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html
- https://github.com/facebook/react/tree/master/fixtures/unstable-async/suspense
- https://www.instagram.com/developer
