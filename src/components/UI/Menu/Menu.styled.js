import styled from 'styled-components';

export const Container = styled.nav`
  background: #FFF5ED;
  color: #FFF;
  height: 40px;
  padding-left: 18px;
  border-radius: 11px;
  border: 1px solid #E86969;

  ul, li {
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  ul {
    width: 100%;
  }

  li {
    float: left;
    display: inline;
    position: relative;
  }

  a {
    display: block;
    line-height: 38px;
    padding: 0 14px;
    text-decoration: none;
    color: #E86969;
    font-size: 16px;
  }

  a.dropdown-arrow:after {
    content: "\25BE";
    margin-left: 5px;
  }

  li a:hover {
    color: #FF0000;
    background: #FFF5ED;
  }

  input {
    display: none;
    margin: 0;
    padding: 0;
    height: 40px;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }

  label {
    display: none;
    line-height: 38px;
    text-align: center;
    position: absolute;
    left: 35px;
  }

  label:before {
    font-size: 1.6em;
    content: "\2261";
    margin-left: 20px;
  }

  ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 170px;
    background: #FFF5ED;
    position: absolute;
    z-index: 99;
    display: none;
  }

  ul.sub-menus li {
    display: block;
    width: 100%;
  }

  ul.sub-menus a {
    color: #FF4D4D;
    font-size: 16px;
  }

  li:hover ul.sub-menus {
    display: block;
  }

  ul.sub-menus a:hover {
    background: #f2f2f2;
    color: #212121;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    ul {
      background: #111;
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      z-index: 3;
      height: auto;
      display: none;
    }
    ul.sub-menus {
      width: 100%;
      position: static;
    }
    ul.sub-menus a {
      padding-left: 30px;
    }
    li {
      display: block;
      float: none;
      width: auto;
    }
    input, label {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
    input {
      z-index: 4;
    }
    input:checked + label {
      color: white;
    }
    input:checked + label:before {
      content: "\00d7";
    }
    input:checked ~ ul {
      display: block;
    }
  }
`;
