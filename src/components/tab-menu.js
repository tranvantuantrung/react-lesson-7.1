import React, { Component } from 'react';
import '../styles/tab-menu.css';
import home from '../images/home.svg';
import gif from '../images/gif.svg';
import cloud from '../images/cloud.svg';
import coffee from '../images/coffee.svg';
import setting from '../images/setting.svg';

class TabMenu extends Component {
  render() {
    return (
      <div className="tab-menu">
        <div className="tab-menu-item">
          <img src={home} />
          <span>HOME</span>
        </div>
        <div className="tab-menu-item">
          <img src={gif} />
          <span>DEALS</span>
        </div>
        <div className="tab-menu-item">
          <img src={cloud} />
          <span>UPLOAD</span>
        </div>
        <div className="tab-menu-item">
          <img src={coffee} />
          <span>WORK</span>
        </div>
        <div className="tab-menu-item">
          <img src={setting} />
          <span>SETTINGS</span>
        </div>
      </div>
    );
  }
}

export default TabMenu;
