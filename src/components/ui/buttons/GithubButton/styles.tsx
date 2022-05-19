import { styled } from "styles/stitches.config";

const StyledButton = styled("button", {
  inlineFlex: "row",
  alignItems: "center",
  gap: "$16",

  padding: "$12 $24",
  borderRadius: "$100",

  color: "$white",
  backgroundColor: "$shape",
  fontWeight: "$bold",

  transition: "filter 0.2s",
  cursor: "pointer",
  fontSize: "$16",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export { StyledButton };