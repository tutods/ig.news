import { styled } from "styles/stitches.config";

const HeroSection = styled("section", {
  width: "100%",
  minHeight: "calc(100vh - $80)",

  display: "flex",
  alignItems: "center",
});

const Content = styled("div", {
  width: "100%",
  maxWidth: "100vw",
  maxWidth: "1440px",

  margin: "0 auto", // center horizontally

  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gap: "$32",
  gridTemplateColumns: "1fr 1fr",

  // Title and Text Column
  "div:first-of-type": {
    h3: {
      display: "flex",
      alignItems: "center",
      gap: "$20",

      marginBottom: "$40",

      fontSize: "$24",
      lineWeight: "$32",
      fontWeight: "$bold",
      color: "$white",
    },

    h1: {
      marginBottom: "$24",

      fontSize: "$72",
      fontWeight: "$extraBold",
      lineHeight: "$72",

      span: {
        color: "$blue",
      },
    },

    p: {
      // maxWidth: "55%",

      marginBottom: "$40",

      color: "$white",
      fontSize: "$24",
      lineHeight: "$36",

      span: {
        color: "$blue",
      },
    },
  },

  // Image Column
  "div:nth-of-type(2)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  "@sm": {
    px: "$32",

    gridTemplateColumns: "1fr !important",
    gridTemplateRows: "1fr 1fr",

    // Title and Text Column
    "div:first-of-type": {
      h1: {
        fontSize: "$32",
        lineHeight: "$36",
      },
    },
  },
});

const SubscriptionButton = styled("button", {
  padding: "$20 $62",

  borderRadius: "$100",

  backgroundColor: "$yellow",
  color: "$background",

  fontWeight: "$bold",
  fontSize: "$20",
  textAlign: "center",

  transition: "filter 0.2s",

  "&:hover": {
    filter: "opacity(0.7)",
  },
});

export { HeroSection, Content, SubscriptionButton };