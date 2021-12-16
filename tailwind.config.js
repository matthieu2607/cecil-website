module.exports = {
  purge: {
    enabled: process.env.CECIL_ENV == 'production',
    mode: 'all',
    content: [
      './layouts/**/*.html.twig',
      './themes/**/layouts/**/*.html.twig',
    ],
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        blue: '#163C56',
        gold: '#F2D07F',
        darkblue: '#092F44',
        bluegray: '#7B99A9',
        dark: '#24283b',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.darkblue'),
            a: {
              color: theme('colors.blue'),
              '&:hover': {
                color: theme('colors.blue'),
              },
            },
            h1: {
              color: theme('colors.darkblue'),
              fontWeight: '700',
              paddingBottom: '.3em',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: 0,
            },
            h2: {
              color: theme('colors.darkblue'),
            },
          },
        },
        dark: {
          css: {
            color: 'white',
            a: {
              color: 'white',
              '&:hover': {
                color: 'white',
              },
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            code: {
              color: 'white',
            },
            blockquote: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
          },
        },
      }),
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px',
      }
    }
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
