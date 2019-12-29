import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Hoge = ({ hoge }) => {
  const [text, setText] = useState('hello, world');

  useEffect(() => {
    setText('hello, react!!');
  }, []);

  return (
    <React.Fragment>
      <div>{text}</div>
      <div>{hoge}</div>
    </React.Fragment>
  );
};

Hoge.propTypes = {
  hoge: PropTypes.string.isRequired
};

Hoge.defaultProps = {
  hoge: 'mass'
};

export default Hoge;
