import React from 'react';
import classNames from 'classnames';
import Start from '../pages/home/Start.jsx'

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <Start />
    </div>
  );
}

export default Home;
