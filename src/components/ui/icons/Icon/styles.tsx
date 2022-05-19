import { styled } from "@stitches/react";

const Svg = styled("svg", {
  variants: {
    size: {
      sm: {
        width: "$12",
        height: "$12",
      },
      md: {
        width: "$14",
        height: "$14",
      },
      base: {
        width: "$16",
        height: "$16",
      },
      lg: {
        width: "$24",
        height: "$24",
      },
    },
    color: {
      base: {
        fill: "$text",
        color: "$text",
      },
      green: {
        fill: "$green",
        color: "$green",
      },
      blue: {
        fill: "$blue",
        color: "$blue",
      },
      yellow: {
        fill: "$yellow",
        color: "$yellow",
      },
    },
  },

  defaultVariants: {
    size: "base",
  },
});

export { Svg };