const TextBoxComponent = {
  baseStyle: props => ({
    color: props.colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.900',
    textAlign: props.textAlign ? props.textAlign : null,
    fontFamily: 'heading',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
  }),

  sizes: {
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
      fontWeight: 700,
    },
    lg: {
      fontSize: 'lg',
      fontWeight: 700,
    },
    xl: {
      fontSize: 'xl',
      fontWeight: 700,
    },
    '2xl': {
      fontSize: '2xl',
      fontWeight: 800,
    },
    '3xl': {
      fontSize: '3xl',
      fontWeight: 800,
    },
    '4xl': {
      fontSize: '4xl',
      fontWeight: 900,
    },
  },
  variants: {
    label: props => ({
      color: props.colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.700',
      textAlign: props.textAlign ? props.textAlign : null,
      fontFamily: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
    }),
    value: props => ({
      color: props.colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.700',
      textAlign: props.textAlign ? props.textAlign : null,
      fontFamily: 'mono',
      textTransform: 'none',
      mt: '9px',
    }),
  },
};

export default TextBoxComponent;
