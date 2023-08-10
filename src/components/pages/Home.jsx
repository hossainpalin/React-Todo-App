import React from 'react';
import Styles from '../../styles/modules/home.module.scss';
import TodoContent from '../TodoContent';
import TodoHeader from '../TodoHeader';
import TodoInput from '../TodoInput';
import TodoStatusBar from '../TodoStatusBar';

function Home() {
  return (
    <div className={`${Styles.home} flex flex-col-center`}>

      {/* Todo content here */}
      <div className={`${Styles.itemOne} flex flex-col-center`}>
        <TodoHeader />
        <TodoStatusBar />
        <TodoContent />
      </div>

      {/* Todo input here */}
      <div className={Styles.itemTwo}>
        <TodoInput />
      </div>

    </div>
  );
}

export default Home;
