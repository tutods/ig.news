import { styled } from "styles/stitches.config";

const StyledLink = styled("a", {
  variants: {
    active: {
      true: {
        color: "$white",
        fontWeight: "$bold",

        "&::after": {
          content: "",
          position: "absolute",
          bottom: "1px",
          left: 0,

          width: "100%",
          height: "3px",

          borderRadius: "3px 3px 0 0",

          backgroundColor: "$yellow",
        },
      },
      false: {
        opacity: "0.5",
      },
    },
  },

  defaultVariants: { active: false },

  position: "relative",
  height: "$80",
  inlineFlex: "column",
  padding: "0 $8",
  lineHeight: "$80",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    color: "$white",
    opacity: 1,
  },
});

export { StyledLink };