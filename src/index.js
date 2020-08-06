import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import './index.sass';
import GalleryHorizontal from './galleryHorizontal';
import Gallery from './gallery';

const linkedin = "http://linkedin.com/in/david-stearns-70727437";
const github = "http://github.com/davetheknave";
const email = "mailto:dave.j.stearns@gmail.com"
const resume = "resume.pdf"

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div id="site">
          <div id="home">
            <h1>David Stearns</h1>
            <p>I am a software developer, but I make things besides software, too.</p>
            <p id="social-links">
            <a className="hyperlink" href={resume}>Resume</a>
            <a className="hyperlink" href={email}>Email</a>
            <a className="hyperlink" href={linkedin}>LinkedIn</a>
            <a className="hyperlink" href={github}>GitHub</a>
            </p>
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
        <li><MenuLink to="/1">
          Things I've made
        </MenuLink></li>
        <li><MenuLink to="/2">
          Other things I've made
        </MenuLink></li>
        <li><MenuLink to="/3">
          More things I've made
        </MenuLink></li>
        <li><MenuLink to="/p">
          Privacy Policy
        </MenuLink></li>
      </ul>
    )
  }
}

class MenuLink extends React.Component {
  render(){
    const active = this.props.active ? "active" : ""
    const to = active ? "/" : this.props.to
    return (
      <Link className={active} to={to}>{this.props.children}</Link>
    )
  }
}

class Content extends React.Component {
  content = (<div>asdf</div>)
  render(){
    return (<div id="page">{this.content}</div>);
  }
}

class Work1 extends Content {
  content = (
  <GalleryHorizontal items={[
    {name:"My Personal Website",image:"Website.png",text:"My Personal Website",link:"https://github.com/davetheknave/davetheknave.github.io/"},
    {name:"D-Chess",image:"DChess2.png",text:"A 5-dimensional chess game",link:"https://github.com/davetheknave/D-Chess/"},
    {name:"My Old Website",image:"OldWebsite.png",text:"The personal website I used to use",link:"https://github.com/davetheknave/davetheknave.github.io-old"},
    {name:"Project Moretti",image:"Moretti.png",text:"A top secret project"}]}>
    </GalleryHorizontal>
  )
}

class Work2 extends Content {
  content = (
    <Gallery items={[{name:"D-Chess",image:"DChess2.png",link:"https://github.com/davetheknave/D-Chess/"}]}>

    </Gallery>
  )
}

class Work3 extends Content {
  content = (<div>
  Stuff
  </div>)
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