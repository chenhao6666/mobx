import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './LoadingBar.css';

@observer
class LoadingBar extends Component {
  render() {
    return (
      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="22" fill="none" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    );
  }
}

export default LoadingBar;