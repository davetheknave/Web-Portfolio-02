import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './index.sass';
import GalleryHorizontal from './galleryHorizontal';
import Gallery from './gallery';

const linkedin = "http://linkedin.com/in/david-stearns-70727437";
const github = "http://github.com/davetheknave";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div id="site">
          <div id="home">
            <h1>David Stearns</h1>
            <p>I am a software developer, but I make things besides software, too.</p>
            <p><a className="hyperlink" href={linkedin}>LinkedIn</a></p>
            <p><a className="hyperlink" href={github}>GitHub</a></p>
            <p>dave.j.stearns at gmail.com</p>
            <Menu />
          </div>
          <Switch>
            <Route path="/1" component={Work1}/>
            <Route path="/2" component={Work2}/>
            <Route path="/3" component={Work3}/>
            <Route path="/p" component={Privacy}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li><Link to="/1">
          Things I've made
        </Link></li>
        <li><Link to="/2">
          Other things I've made
        </Link></li>
        <li><Link to="/3">
          More things I've made
        </Link></li>
        <li><Link to="/p">
          Privacy Policy
        </Link></li>
      </ul>
    )
  }
}

class MenuLink extends React.Component {
  render(){
    return (
      <a href={this.props.href}>{this.props.children}</a>
    )
  }
}

class Content extends React.Component {
  content = (<div>asdf</div>)
  render(){
    return (<div id="page">{this.content}</div>);
  }
}

class Work3 extends Content {
  content = (<div>
  Stuff
  </div>)
}

class Work2 extends Content {
  content = (
    <Gallery items={[{name:"D-Chess",image:"DChess2.png"}]}>

    </Gallery>
  )
}

class Work1 extends Content {
  content = (
  <GalleryHorizontal items={[{name:"D-Chess",image:"DChess2.png",text:"A 5-dimensional chess game"},{name:"My Personal Website",image:"Website1.png",text:"My Personal Website"},{name:"My Old Website",image:"OldWebsite.png",text:"The personal website I used to use"},{name:"Project Moretti",image:"Moretti.png",text:"A top secret project"}]}>

    </GalleryHorizontal>
  )
}

class Privacy extends Content {
  content = (<div>
    <h2>Privacy Policy</h2>
    <p>I don't spy on you.</p>
  </div>)
}

// ======

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);