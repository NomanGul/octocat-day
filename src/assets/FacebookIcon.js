import React from 'react'
import SvgWrapper from './SvgWrapper'

const FacebookIcon = ({ fill = '#3b5998', ...props }) => {
  return (
    <SvgWrapper {...props}>
      <path
        style={{ fill }}
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
      />
    </SvgWrapper>
  );
}

export default FacebookIcon