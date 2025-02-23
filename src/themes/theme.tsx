import { createTheme } from '@mui/material';
import ThemeSettings from './themeSettings';

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeSettings.THEME_COLORS.primary,
    },
    secondary: {
      main: ThemeSettings.THEME_COLORS.secondary,
    },
    text: {
      primary: ThemeSettings.THEME_COLORS.text,
    },
    background: {
      default: ThemeSettings.THEME_COLORS.background,
      paper: ThemeSettings.THEME_COLORS.background,
    },
  },
  typography: {
    fontFamily: `Montserrat, sans-serif`,
    h1: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title01,
    },
    h2: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title02,
    },
    h3: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title03,
    },
    h4: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
    },
    body1: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.body01,
    },
    body2: {
      fontSize: ThemeSettings.THEME_FONT_SIZES.body02,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState?.variant === 'contained' && {
            backgroundColor: ownerState.datatype === 'secondary'
              ? ThemeSettings.THEME_COLORS.white
              : ThemeSettings.THEME_COLORS.primary,
            border: `1px solid`,
            borderColor: ThemeSettings.THEME_COLORS.primary,
            textTransform: `none`,
            color:
              ownerState.datatype === 'secondary'
                ? ThemeSettings.THEME_COLORS.primary
                : ThemeSettings.THEME_COLORS.white,
            fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
            fontSize: ThemeSettings.THEME_FONT_SIZES.button,
            fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.regular,
            minWidth: 0,
            padding: '.3vw 1.5vw',
            willChange: `transform`,
            borderRadius: `10px`,
            '&:hover': {
              backgroundColor:
                ownerState.datatype === 'secondary'
                  ? ThemeSettings.THEME_COLORS.primary
                  : ThemeSettings.THEME_COLORS.white,
              color: ownerState.datatype === 'secondary'
                ? ThemeSettings.THEME_COLORS.white
                : ThemeSettings.THEME_COLORS.primary,
            },
            '@media (max-width: 1535px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.body01_small,
            },
            '@media (max-width: 600px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.body02,
            },
          })
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ ownerState }) => ({
          color: ThemeSettings.THEME_COLORS.text,
          fontSize: ThemeSettings.THEME_FONT_SIZES.title01,
          fontFamily: ThemeSettings.THEME_FONTS.primary,
          fontWeight:
            ownerState?.component === 'strong'
              ? ThemeSettings.THEME_FONT_WEIGHTS.bold
              : ThemeSettings.THEME_FONT_WEIGHTS.extraLight,
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title01_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
            textAlign: 'center',
          },
        }),
        h2: ({ ownerState }) => ({
          color: ThemeSettings.THEME_COLORS.text,
          fontFamily: ThemeSettings.THEME_FONTS.primary,

          fontSize:
            ownerState.datatype === 'menu-card'
              ? ThemeSettings.THEME_FONT_SIZES.title04
              : ThemeSettings.THEME_FONT_SIZES.title02,
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title02_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
            textAlign: 'center',
          },
          fontWeight:
            ownerState?.component === 'strong'
              ? ThemeSettings.THEME_FONT_WEIGHTS.bold
              : ThemeSettings.THEME_FONT_WEIGHTS.extraLight,
        }),
        h3: ({ ownerState }) => ({
          ...(ownerState?.variant === 'h3' && {
            lineHeight: '120%',
            color: ThemeSettings.THEME_COLORS.text,
            fontFamily: `"${ThemeSettings.THEME_FONTS.primary}", sans-serif`,
            fontSize: ThemeSettings.THEME_FONT_SIZES.title03,
            '@media (max-width: 1535px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.title03_small,
            },
            '@media (max-width: 600px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
              textAlign: 'center',
            },
            fontWeight:
              ownerState?.component === 'strong'
                ? ThemeSettings.THEME_FONT_WEIGHTS.bold
                : ThemeSettings.THEME_FONT_WEIGHTS.extraLight,
          }),
        }),
        h4: ({ ownerState }) => ({
          ...(ownerState?.variant === 'h4' && {
            color: ThemeSettings.THEME_COLORS.text,
            fontFamily: ThemeSettings.THEME_FONTS.primary,
            fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
            '@media (max-width: 600px)': {
              fontSize: ThemeSettings.THEME_FONT_SIZES.title04,
              textAlign: 'center',
            },
            fontWeight:
              ownerState?.component === 'strong'
                ? ThemeSettings.THEME_FONT_WEIGHTS.bold
                : ThemeSettings.THEME_FONT_WEIGHTS.extraLight,

          }),
        }),
        body1: ({ ownerState }) => ({
          lineHeight: '130%',
          color: ThemeSettings.THEME_COLORS.text,
          fontFamily: `${ThemeSettings.THEME_FONTS.primary}, sans-serif`,
          fontSize: ThemeSettings.THEME_FONT_SIZES.body01,
          fontWeight:
            ownerState?.component === 'strong'
              ? ThemeSettings.THEME_FONT_WEIGHTS.bold
              : ThemeSettings.THEME_FONT_WEIGHTS.extraLight,
          '@media (max-width: 1535px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body01_small,
          },
          '@media (max-width: 600px)': {
            fontSize: ThemeSettings.THEME_FONT_SIZES.body02,
            textAlign: 'center',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: ThemeSettings.THEME_COLORS.white,
          width: `100%`,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: ThemeSettings.THEME_COLORS.primary,
              borderRadius: `10px`,
            },
            '&:hover fieldset': {
              borderColor: ThemeSettings.THEME_COLORS.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: ThemeSettings.THEME_COLORS.primary,
              border: `1px solid ${ThemeSettings.THEME_COLORS.primary}`
            },
          },
          '& .MuiInputLabel-root': {
            color: '#333',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#1976d2',
          },
          '& .MuiInputBase-input': {
            fontFamily: ThemeSettings.THEME_FONTS.primary,
            fontSize: `1vw`,
            color: ThemeSettings.THEME_COLORS.primary,
            textAling: `center`
          },
        },

      },
    },
  },
});

export { theme };
