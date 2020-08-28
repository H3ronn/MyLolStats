import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ChampionsViewTemplate from 'Templates/ChampionsViewTemplate';

const ChampionsView = ({ favouriteChampList }) => {
  useEffect(() => {
    localStorage.setItem('myState', favouriteChampList);
  });
  // console.log(props.state);
  return <ChampionsViewTemplate favouriteChampList={favouriteChampList} />;
};

const mapStateToProps = state => {
  return { favouriteChampList: state };
};

export default connect(mapStateToProps)(ChampionsView);
