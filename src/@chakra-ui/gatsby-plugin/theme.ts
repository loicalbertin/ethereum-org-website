import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
} from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import foundations from "./foundations"

// Component style overrides
import * as components from "./components"

import semanticTokens from "./semanticTokens"

const config: ThemeConfig = {
  cssVarPrefix: "eth",
  initialColorMode: "light",
  useSystemColorMode: true,
}

/**
 * Override default styles with our custom theme.
 *
 * The complete list of default Chakra styles can be found here:
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src
 */
const theme: ThemeOverride = {
  config,
  fonts: {
    heading:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    body: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  styles,
  ...foundations,
  semanticTokens,
  components,
}

export default extendTheme(theme)