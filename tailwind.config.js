import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.violet.800')
            },
            h2: {
              color: theme('colors.violet.700')
            },
            strong: {
              color: theme('colors.purple.950')
            },
            a: {
              color: theme('colors.purple.900'),
              'text-decoration': 'none',
              'border-bottom-color': theme('colors.purple.900'),
              'border-bottom-width': '1px',
              'border-bottom-style': 'dotted',
              '&:hover': {
                'border-bottom-color': theme('colors.purple.900'),
                'border-bottom-width': '1px',
                'border-bottom-style': 'solid',
              },
            }
          }
        },
        invert: {
          css: {
            h1: {
              color: theme('colors.green.300')
            },
            h2: {
              color: theme('colors.green.400')
            },
            strong: {
              color: theme('colors.teal.200')
            },
            a: {
              color: theme('colors.teal.100'),
              'text-decoration': 'none',
              'border-bottom-color': theme('colors.teal.100'),
              'border-bottom-width': '1px',
              'border-bottom-style': 'dotted',
              '&:hover': {
                'border-bottom-color': theme('colors.teal.100'),
                'border-bottom-width': '1px',
                'border-bottom-style': 'solid',
              },
            }
          }
        },
      })
    },
  },
  plugins: [typography],
}

