# react-simple-image-comparator
This is a React component that allows you to compare two images by using a slider that reveals more or less of the second image. The component uses styled-components to apply CSS styles to the different elements.

## How to install

To install the component run:

```js
npm i react-simple-image-comparator
```

## How to use
To use the component, you need to import it into your React project:
```js
import ImageComparator from "react-simple-image-comparator";
```

Then, you can use it in your JSX code like this:

```js
<ImageComparator
  firstImg="path/to/first/image"
  secondImg="path/to/second/image"
  ratio="16/9" // optional, defaults to "1/1"
  initiaSliderlValue={50} // optional, defaults to 50
  styles={{ // optional
    firstImg: { width: "100%" },
    secondImg: { width: "100%" },
    container: { borderRadius: "0.5rem" }
  }}
/>
```

## Props

The component accepts the following props:

| Prop  | Type | Description |
| ------------- | ------------- | ---------- |
| <strong>firstImg:</strong> (required)  | string  | the path or URL to the first image to be compared. |
| <strong>secondImg:</strong> (required) | string  | the path or URL to the second image to be compared. |
| <strong>ratio:</strong> (optional) | string | the aspect ratio of the image container. It should be a string in the form "width/height", e.g. "16/9". Defaults to "1/1" |
| <strong>initialSliderValue:</strong> (optional) | number | the initial position of the slider, as a percentage. Defaults to 50.|
| <strong>styles:</strong> (optional) | object | an object that contains CSS styles to apply to the different elements of the component. It should have the following structure: |
``` js
{
  firstImg: {}, // styles for the first image
  secondImg: {}, // styles for the second image
  container: {} // styles for the container div
}
```

## License

This component is released under the ISC license.
