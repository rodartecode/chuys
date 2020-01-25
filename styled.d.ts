// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primaryDark: string;
      secondary: string;
      primaryLight: string;
      primaryHover: string;
    };

    mobile: string;
  }
}
