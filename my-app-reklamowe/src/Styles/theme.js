import * as vars from "./variables";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  ...vars,
});

console.log("theme", theme);

export default theme;
