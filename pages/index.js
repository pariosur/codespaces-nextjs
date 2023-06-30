import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import CodeSnippet from '../components/CodeSnippet';

const Home = () => {
  return (
    <div>
      <h1>⚡︎ Code Snippets for Metal Blog ⚡︎ </h1>
      <p>Some blog content...</p>
      <CodeSnippet />
    </div>
  );
};

export default Home;
