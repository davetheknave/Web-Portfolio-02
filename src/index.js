import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';

class Home extends React.Component {
  render() {
    return (
      <div id="content">
        <div id="home">
          <h1>David Stearns</h1>
          <p>I am a software developer. I make things besides software, too.</p>
          <p>You can reach me on <a href={this.linkedin}>LinkedIn</a>, <a href={this.github}>GitHub</a>, or email me at dave.j.stearns at gmail.com</p>
          <Menu />
        </div>
        <Content />
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li><Link href="hi">
          Things I've made
        </Link></li>
        <li><Link href="hi">
          More things I've made
        </Link></li>
        <li><Link href="hi">
          Privacy Policy
        </Link></li>
      </ul>
    )
  }
}

class Link extends React.Component {
  render(){
    return (
      <a href={this.props.href}>{this.props.children}</a>
    )
  }
}

class Content extends React.Component {
  content = (<div></div>)
  render(){
    return this.content;
  }
}

class About extends Content {
  linkedin = "http://linkedin.com/in/david-stearns-70727437"
  github = "http://github.com/davetheknave"
  content = (
  <div>
    <h2>Information about me</h2>
    <p>I am a software developer. I do other things, sometimes.</p>
    <p>You can reach me on <a href={this.linkedin}>LinkedIn</a>, <a href={this.github}>GitHub</a>, or email me at dave.j.stearns at gmail.com</p>
  </div>)
}

class Work1 extends Content {
  content = (<div>
    <h2>Things I've made</h2>
    <p>Here are just some of the things I have done.</p>
    <ul>
      <li><Link href="https://github.com/davetheknave/davetheknave.github.io">This website</Link></li>
      <li><Link href="https://github.com/davetheknave/davetheknave.github.io-old">My previous website</Link></li>
      <li>Project Moretti</li>
      <li><Link href="">D-Chess</Link></li>
    </ul>
  </div>)
}

class Privacy extends Content {
  content = (<div>
    <h2>Privacy Policy</h2>
    <p>I don't spy on you</p>
  </div>)
}

// ======

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);