class ThemeSettings {
    static readonly THEME_COLORS = {
      primary: '#002653',
      secondary: '#221E1F',
      text: '#221E1F',         
      background: '#EEEEEE',
      black: '#222322',
      white: '#FFFFF6',
      gray: '#D9D9D9'
    };
  
    static readonly THEME_FONTS = {
      primary: 'Montserrat',
    };
  
    static readonly THEME_FONT_SIZES = {
      title01: '3.75rem',
      title01_small: '2.65rem',
      title02: '3.125rem',
      title02_small: '2.222rem',
      title03: '2.5rem',
      title03_small: '1.775rem',
      title04: '1.875rem',
      title04_small: '1.333rem',
  
      body01: '1.375rem',
      body01_small: '1.333rem',
      body02: '1rem',
      button: '1.375rem',
    };
  
    static readonly THEME_FONT_WEIGHTS = {
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    };
  
    static readonly THEME_SPACING = {
      mini: 1,
      extraSmall: 2,
      verySmall: 4,
      small: 6,
      medium: 8, 
      semiLarge: 12, 
      large: 16, 
    };
  }
  
  export default ThemeSettings;