import React, { useCallback, useState } from "react";
import styled from "styled-components";

type StylesType = {
  firstImg?: React.CSSProperties;
  secondImg?: React.CSSProperties;
  container?: React.CSSProperties;
};

type ImageComparatorProps = {
  firstImg: string;
  secondImg: string;
  ratio?: "1/1" | "16/9" | "9/16" | "4/3"| "3/4" | string;
  initiaSliderlValue?: number;
  styles?: StylesType;
};

const ImageComparator = React.memo(
  ({
    firstImg,
    secondImg,
    ratio = "1/1",
    initiaSliderlValue = 50,
    styles,
  }: ImageComparatorProps) => {
    const [range, setRange] = useState(initiaSliderlValue);

    const slide = useCallback(
      (value: string) => {
        setRange(parseInt(value));
      },
      [setRange]
    );

    return (
      <StyledImageComparator ratio={ratio} style={styles?.container}>
        <img src={firstImg} style={styles?.firstImg} />
        <StyledEditedImage
          range={range}
          src={secondImg}
          style={styles?.secondImg}
        />
        <StyledSliderInput
          type="range"
          min={0}
          max={100}
          value={range}
          onInput={(value) => slide(value.currentTarget.value)}
        />
      </StyledImageComparator>
    );
  }
);

//Styles

interface StyledImageProps {
  ratio?: string;
}

interface StyledEditedImageProps {
  range?: number;
}

const StyledImageComparator = styled.div<StyledImageProps>`
  width: calc(100% - 2rem);
  max-width: 600px;
  margin: 1rem;
  position: relative;
  aspect-ratio: ${({ratio}) => ratio};
  overflow: hidden;
  border-radius: 1rem;
  & img {
    width: 100%;
    aspect-ratio: ${({ratio}) => ratio};
    object-fit: cover;
    position: absolute;
  }
`;

const StyledEditedImage = styled.img<StyledEditedImageProps>`
  clip-path: ${({range}) =>
    `polygon(0 0, ${range}% 0, ${range}% 100%, 0 100%)`};
`;

const StyledSliderInput = styled.input`
  touch-action: none;
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 40px;
  top: calc(50% - 20px);
  background-color: transparent;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 40px;
    width: 40px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 3px solid white;
    border-radius: 50%;
    background-size: contain;
    cursor: pointer;
  }
`;

export default ImageComparator;
