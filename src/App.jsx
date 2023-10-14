import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App({ PriceCard1, PriceCard2, PriceCard3 }) {
  return (
    <>
      <h1>React Price card</h1>
    <div id="container">
      <div id="first">
        <h6>FREE</h6>
        <h1>$0/month</h1>
        <ul>
          {PriceCard1.map((detail) => (
            <li key={detail.id}>
              {detail.important ? <p>✓ {detail.content}</p> : <p style={{ color: 'lightgrey' }}>× {detail.content}</p>}
            </li>
          ))}
        </ul>
        <button disabled>BUTTON</button>
      </div>
      <div id="second">
        <h6>PLUS</h6>
        <h1>$9/month</h1>
        <ul>
          {PriceCard2.map((detail) => (
            <li key={detail.id}>
              {detail.important ? <p>✓ {detail.content}</p> : <p style={{ color: 'lightgrey' }}>× {detail.content}</p>}
            </li>
          ))}
        </ul>
        <button disabled>BUTTON</button>
      </div>
      <div id="third">
        <h6>PRO</h6>
        <h1>$49/month</h1>
        <ul>
          {PriceCard3.map((detail) => (
            <li key={detail.id}>
              {detail.important ? <p>✓ {detail.content}</p> : <p style={{ color: 'lightgrey' }}>× {detail.content}</p>}
            </li>
          ))}
        </ul>
        <button type="submit"><a href='#'>BUTTON</a></button>
      </div>
      </div>
    </>
  );
}

export default App;

