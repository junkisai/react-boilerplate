import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Hoge from '../../components/Hoge';
import { getHogeCreator } from '../../modules/hoge';

const Sample = styled.div``;

const TopContainer = () => {
  const hoge = useSelector(state => state.hoge.hoge);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    dispatch(getHogeCreator('huga'));
  };

  return (
    <Sample>
      <h3>{hoge}</h3>
      <button onClick={handleRedirect}>hogeページへ移動</button>
      <Hoge />
    </Sample>
  );
};

TopContainer.propTypes = {
  hoge: PropTypes.string
};

TopContainer.defaultProps = {
  hoge: 'hello world'
};

export default TopContainer;
