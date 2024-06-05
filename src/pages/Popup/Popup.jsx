import React from 'react';
import './Popup.css';

const Popup = () => {
  const getCurrentTab = async () => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  };

  const startObservingMessages = async () => {
    const tab = await getCurrentTab();
    const response = await chrome.tabs.sendMessage(
      tab.id,
      'hello from popup!!!'
    );
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            console.log('test');
            startObservingMessages();
            chrome.tabs.query();
          }}
        >
          stop or start observing
        </button>

        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's finaly working
        </a>
      </header>
    </div>
  );
};

export default Popup;
