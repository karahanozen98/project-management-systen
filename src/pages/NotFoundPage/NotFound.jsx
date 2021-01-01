import React from "react";
import styled from "styled-components";

function NotFound() {
  return (
    <NotFoundWrapper>
      <div class="container">
        <div class="glitch" data-text="(404) Page Not Found :/">
        (404) Page Not Found :/
        </div>
        <div class="glow">(404) Page Not Found :/</div>
        <h4>You may be unauthorized or miss directed</h4>
        <a href="/">Take me back to the safe zone</a>
      </div>
    </NotFoundWrapper>
  );
}
export default NotFound;

const NotFoundWrapper = styled.div`
  font-family: "Oswald", sans-serif;
  font-style: italic;
  min-height: 100vh;
  text-align:center;

  .container {
    position: absolute;
    width: 70%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  a{
      color:light-gray;
  }

  .glitch {
    color: rgb(223, 191, 191);
    position: relative;
    font-size: 8em;
    margin: auto;
    animation: glitch 2s 2s infinite;
  }

  .glitch::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 magenta;
    background: black;
    overflow: hidden;
    top: 0;
    animation: noise-1 3s linear infinite alternate-reverse,
      glitch 5s 5.05s infinite;
  }

  .glitch::after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 lightgreen;
    background: black;
    overflow: hidden;
    top: 0;
    animation: noise-2 3s linear infinite alternate-reverse,
      glitch 5s 5s infinite;
  }

  @keyframes glitch {
    1% {
      transform: rotateX(10deg) skewX(90deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }

  @keyframes noise-1 {
    $steps: 30;
    @for $i from 1 through $steps {
      #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
    }
  }

  @keyframes noise-2 {
    $steps: 30;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}px 0 #{$bottom}px 0);
      }
    }
  }

  .scanlines {
    overflow: hidden;
    mix-blend-mode: difference;
  }

  .scanlines::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 0.5%,
      transparent 1%
    );

    animation: fudge 7s ease-in-out alternate infinite;
  }

  @keyframes fudge {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, 2%);
    }
  }

  .glow {
    @extend .glitch;
    text-shadow: 0 0 1000px rgb(223, 191, 191);
    color: transparent;
    position: absolute;
    top: 0;
  }

  .subtitle {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 0.8vw;
    color: rgba(165, 141, 141, 0.4);
    text-transform: uppercase;
    letter-spacing: 1em;
    text-align: center;
    position: absolute;
    left: 17%;
    animation: glitch-2 5s 5.02s infinite;
  }

  @keyframes glitch-2 {
    1% {
      transform: rotateX(10deg) skewX(70deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }
`;