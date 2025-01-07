import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/danieldu22/"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIKdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNMjUsMmMtMTIuNjg4NjYsMCAtMjMsMTAuMzExMzQgLTIzLDIzYzAsMTIuNjg4NjcgMTAuMzExMzQsMjMgMjMsMjNjMTIuNjg4NjcsMCAyMywtMTAuMzExMzMgMjMsLTIzYzAsLTEyLjY4ODY2IC0xMC4zMTEzMywtMjMgLTIzLC0yM3pNMjUsNGMxMS42MDczNCwwIDIxLDkuMzkyNjYgMjEsMjFjMCwwLjA3MTM3IC0wLjAwNTE1LDAuMTQxNjkgLTAuMDA1ODYsMC4yMTI4OWMtMC42Mzk2MSwtMC4wNTkwNCAtMS4zNzg2MywtMC4xMTUxMSAtMi4zMTgzNiwtMC4xNDg0NGMtMS4zMjg3MiwtMC4wNDcxMiAtMy4wMDM1MiwtMC4wMzM0NyAtNC45MDIzNCwwLjA2MDU1YzAuMDcwNDEsLTAuNDkwMzUgMC4xMTk3NywtMC45ODc2MiAwLjEyMTA5LC0xLjQ5ODA1YzAuMDk2ODMsLTEuODcyNjIgLTAuNTMyMDEsLTMuNjI0NDkgLTEuNTU0NjksLTUuMTcxODdjMC4yNDcwNywtMC44NTM3MyAwLjUzNjksLTEuOTM5ODYgMC42MDkzOCwtMy4xNzE4N2MwLjA4MjYsLTEuNDA0MjggLTAuMDM4NjIsLTIuOTYxNDQgLTEuMTY2MDIsLTQuMDEzNjdsLTAuMjg5MDYsLTAuMjY5NTNoLTAuMzk0NTNjLTIuNjgzMDcsMCAtNC41MTk1OSwxLjEyMzIxIC01LjY0MjU4LDIuMDEzNjdjLTEuNjIxNSwtMC42Mjc2NSAtMy40NDQ4MSwtMS4wMTM2NyAtNS40NTcwMywtMS4wMTM2N2MtMi4wMjM2MywwIC0zLjg2NDQ3LDAuMzkxNDIgLTUuNTUyNzMsMS4wMTc1OGMtMS4xMjIzNSwtMC44OTA4OSAtMi45NjA0OCwtMi4wMTc1OCAtNS42NDY0OCwtMi4wMTc1OGgtMC4zOTI1OGwtMC4yODkwNiwwLjI2NzU4Yy0xLjA5ODE5LDEuMDE5NzQgLTEuMTk5MzYsMi41MzQxOCAtMS4xMzA4NiwzLjkzMTY0YzAuMDYwNDEsMS4yMzIyOSAwLjMzMzQ1LDIuMzUyOTIgMC41NzYxNywzLjI0ODA1Yy0xLjAzOTk2LDEuNTc3NTkgLTEuNjY0MDYsMy4zNzQ3NSAtMS42NjQwNiw1LjE1MjM0YzAsMC41MTE2MyAwLjA0NzU4LDEuMDEwNDYgMC4xMTcxOSwxLjUwMTk1Yy0xLjgwNTc2LC0wLjA4Mzc1IC0zLjQxNTQ4LC0wLjA5OTg5IC00LjY5MzM2LC0wLjA1NDY5Yy0wLjkzOTcsMC4wMzMyNCAtMS42Nzg3OCwwLjA4ODg0IC0yLjMxODM2LDAuMTQ4NDRjLTAuMDAwNiwtMC4wNjUzNCAtMC4wMDU4NiwtMC4xMjk4MyAtMC4wMDU4NiwtMC4xOTUzMWMwLC0xMS42MDczMyA5LjM5MjY2LC0yMSAyMSwtMjF6TTE0LjM5NjQ4LDEzLjEzMDg2YzIuMDE3NTgsMC4xOTExOCAzLjUzNTUxLDEuMDkyMTEgNC4yMzgyOCwxLjcxNjhsMC40Njg3NSwwLjQxNDA2bDAuNTc4MTMsLTAuMjM2MzNjMS41ODE0NSwtMC42NTExOSAzLjM0NTM0LC0xLjAyNTM5IDUuMzE4MzYsLTEuMDI1MzljMS45NzMwMiwwIDMuNzM3MzksMC4zNzYwOCA1LjE5OTIyLDEuMDE1NjNsMC41ODU5NCwwLjI1NzgxbDAuNDc4NTIsLTAuNDI1NzhjMC43MDMwMSwtMC42MjQ5IDIuMjIzNTEsLTEuNTI2MSA0LjI0MjE5LC0xLjcxNjhjMC4yNjg0LDAuNDQ0OTggMC41MDE2MywxLjA3NzgxIDAuNDQ1MzEsMi4wMzUxNmMtMC4wNjc0LDEuMTQ1NzIgLTAuMzczODcsMi4zOTM2NCAtMC42MDU0NywzLjEzNDc3bC0wLjE1MDM5LDAuNDgyNDJsMC4yOTg4MywwLjQwODJjMC45ODk0NywxLjM0OTI4IDEuNDkzOTgsMi44MDk1MyAxLjQwODIsNC4zNTM1MmwtMC4wMDE5NSwwLjAyNzM0djAuMDI3MzRjMCwyLjQ5NTQ1IC0wLjg5ODYxLDQuNDkyNzMgLTIuODEyNSw1Ljk3MjY2Yy0xLjkxMzg0LDEuNDc5OTMgLTQuOTM1MjMsMi40Mjc3MyAtOS4xODc1LDIuNDI3NzNjLTQuMjUyMjcsMCAtNy4yNzU1NiwtMC45NDc4MSAtOS4xODk0NSwtMi40Mjc3M2MtMS45MTM4OSwtMS40Nzk5MyAtMi44MTA1NSwtMy40NzcyIC0yLjgxMDU1LC01Ljk3MjY2YzAsLTEuNDY0NzEgMC41Mjg5MiwtMy4wNzYwMSAxLjUwNTg2LC00LjQwODJsMC4yOTI5NywtMC4zOTg0NGwtMC4xNDA2MiwtMC40NzQ2MWMtMC4yMzE3MywtMC43ODc4NyAtMC41MTU3NywtMi4wNjQyNiAtMC41NzIyNywtMy4yMTY4Yy0wLjA0Njk5LC0wLjk1ODYyIDAuMTc5ODksLTEuNTY0NTMgMC40MTAxNiwtMS45NzA3ek04Ljg4NDc3LDI2LjAyMTQ4YzAuNzA2NjksMC4wMDkwMyAxLjUxNjY5LDAuMDQ3MTcgMi4zMjgxMywwLjA4Nzg5YzAuMDc3NTMsMC4zMTE4IDAuMTY1OTMsMC42MTg1MiAwLjI3MzQ0LDAuOTE3OTdjLTMuMzA3MzYsMC4wNjk3NSAtNS43ODE2LDAuNDAyMzMgLTcuMzA2NjQsMC42ODc1Yy0wLjA2NDQ4LC0wLjUwMDM1IC0wLjExNTg0LC0xLjAwNDgyIC0wLjE0NDUzLC0xLjUxNTYyYzEuMTI3MDUsLTAuMTA2OTYgMi43MTU4NCwtMC4yMDQ5OSA0Ljg0OTYxLC0wLjE3Nzczek00MS4xMTUyMywyNi4wMzcxMWMyLjEzMjI5LC0wLjAyNzA4IDMuNzIwNDksMC4wNzEwNSA0Ljg0NzY2LDAuMTc3NzNjLTAuMDI4NjYsMC41MDM0OCAtMC4wNzkxNCwxLjAwMDgyIC0wLjE0MjU4LDEuNDk0MTRjLTEuNTc5NTQsLTAuMjg5NzcgLTQuMTIwNjQsLTAuNjIyMyAtNy41MTM2NywtMC42NzU3OGMwLjEwNTMsLTAuMjkzNTMgMC4xOTI5OSwtMC41OTQ5OCAwLjI2OTUzLC0wLjkwMDM5YzAuODk1MTIsLTAuMDQ3OTggMS43NjgzOSwtMC4wODU5MiAyLjUzOTA2LC0wLjA5NTd6TTExLjkxMjExLDI4LjAxOTUzYzAuNTk2NzQsMS4xOTU4IDEuNDQ5NDEsMi4yNjM0OSAyLjU3NjE3LDMuMTM0NzdjMS41NDA1NCwxLjE5MTIzIDMuNTQzMzQsMi4wMjM1NCA1Ljk4ODI4LDIuNDY4NzVjLTAuMzE5ODYsMC4zMjg2NSAtMC42MTA3OCwwLjY4OTU1IC0wLjg2OTE0LDEuMDcwMzFsLTAuMDYwNTUsLTAuMDUyNzNjMC4wMDU1LC0wLjAwNjMgLTAuNDk3MTMsMC4yNDUyNSAtMS4yNDgwNSwwLjMxMjVjLTAuNzUwOTIsMC4wNjcyNSAtMS42NzcyMSwwLjA0Njg4IC0yLjQ5ODA1LDAuMDQ2ODhjLTEuMjI1LDAgLTEuNzY0NTcsLTAuNTc4NzkgLTIuNjI2OTUsLTEuNjMyODFjLTAuNDc3NTUsLTAuNjQzNjMgLTEuMDU5NzMsLTEuMTY0ODYgLTEuNjI1LC0xLjU2MDU1Yy0wLjU3ODgxLC0wLjQwNTE3IC0xLjA3MjU3LC0wLjY5MTEzIC0xLjY4MzU5LC0wLjc5Mjk3bC0wLjA4MjAzLC0wLjAxMzY3aC0wLjA4Mzk4Yy0wLjQ2NjY3LDAgLTAuOTE4MjQsMC4wMzM3OSAtMS4zMzk4NCwwLjUxNTYzYy0wLjIxMDgsMC4yNDA5MiAtMC4zNTYxLDAuNjg2OTQgLTAuMjYxNzIsMS4wNjQ0NWMwLjA5NDM4LDAuMzc3NTIgMC4zMzMyLDAuNjA5NSAwLjU0Njg4LDAuNzUxOTVjMS4zNjY3MiwwLjkxMTE1IDEuNjA4MjYsMi43MTQ0OCAyLjQ2NDg0LDQuMzE4MzZjMC43OTk5MiwxLjU5MzkyIDIuNTI2MjksMi4zNDk2MSA0LjI5MTAyLDIuMzQ5NjFoMi41OTk2MXY0LjgwMjczYy03LjAzMjE5LC0yLjQ4MjIgLTEyLjMzNTMyLC04LjU5ODEyIC0xMy42Njc5NywtMTYuMDk5NjFjMS41MzA5LC0wLjI4ODM1IDQuMDk0NTEsLTAuNjM1MDIgNy41ODAwOCwtMC42ODM1OXpNMzcuODgyODEsMjguMDI3MzRjMy41NjI3MywwLjAzMDUgNi4xOTgyNCwwLjM3NjcyIDcuNzg3MTEsMC42Njk5MmMtMS4zMzA4Nyw3LjUwNDI0IC02LjYzNTg1LDEzLjYyMjYgLTEzLjY2OTkyLDE2LjEwNTQ3di01LjIwMzEyYzAsLTEuNTg0NTcgLTAuNTIwMzYsLTMuMzMxOSAtMS40MjU3OCwtNC43ODkwNmMtMC4yNzQ5LC0wLjQ0MjQxIC0wLjU5ODI3LC0wLjg2MDgxIC0wLjk1ODk4LC0xLjIzNjMzYzIuMzE1MjIsLTAuNDU3MzggNC4yMTcxMywtMS4yNzU0IDUuNjk3MjcsLTIuNDE5OTJjMS4xMjQzMiwtMC44NjkzOSAxLjk3NTA5LC0xLjkzMzg3IDIuNTcwMzEsLTMuMTI2OTV6TTIzLjY5OTIyLDM0LjA5OTYxaDIuODAwNzhjMC44MTI4MiwwIDEuNjgwNDIsMC42NDc3OSAyLjM3NSwxLjc2NTYzYzAuNjk0NTgsMS4xMTc4MyAxLjEyNSwyLjYxODk0IDEuMTI1LDMuNzM0Mzh2NS43OTg4M2MtMS42MDI1OSwwLjM5MDggLTMuMjc2MjEsMC42MDE1NiAtNSwwLjYwMTU2Yy0xLjcyMzc5LDAgLTMuMzk3NDEsLTAuMjEwNzcgLTUsLTAuNjAxNTZ2LTUuNzk4ODNjMCwtMS4wOTA3NCAwLjQ2NzgzLC0yLjU4ODMgMS4yMDg5OCwtMy43MTA5NGMwLjc0MTE2LC0xLjEyMjY0IDEuNjc3NDEsLTEuNzg5MDYgMi40OTAyMywtMS43ODkwNnpNMTIuMzA4NTksMzUuMjgxMjVjMC44NjU3NywwLjg5ODAxIDEuOTEzOTMsMS43MTg3NSAzLjQ5MjE5LDEuNzE4NzVjMC43NzkxNywwIDEuNzUxNywwLjAyODA3IDIuNjc1NzgsLTAuMDU0NjljMC4wMDMyOSwtMC4wMDAyOSAwLjAwNjQ4LC0wLjAwMTY2IDAuMDA5NzcsLTAuMDAxOTVjLTAuMTIxNzUsMC4zNSAtMC4yMTI1OCwwLjcwMjE3IC0wLjI4OTA2LDEuMDU2NjRoLTIuNzk2ODdjLTEuMjMzMzMsMCAtMi4xMDQ2MiwtMC40NDU1NyAtMi41MDU4NiwtMS4yNDgwNWwtMC4wMDc4MSwtMC4wMTM2N2wtMC4wMDU4NiwtMC4wMTE3MmMtMC4xNjQ0LC0wLjMwNTM3IC0wLjM4MDIxLC0wLjkxNTk3IC0wLjU3MjI2LC0xLjQ0NTMxeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==" alt="" /></a>
                <a href="https://www.instagram.com/p/Ch_jf9PvfiN/?igshid=NzAzN2Q1NTE="><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
