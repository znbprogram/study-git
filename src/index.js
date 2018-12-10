import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

const App = (props) => {
  return <div>こんにちは{props.name}さん</div>
}

ReactDOM.render(
<div>
<App name = "坂本龍馬" />
<App name = "西郷どん" />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
