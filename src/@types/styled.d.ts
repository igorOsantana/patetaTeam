import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      bgColor: string;
      white: string;
      black: string;
      gray: string;
    };
  }
}
