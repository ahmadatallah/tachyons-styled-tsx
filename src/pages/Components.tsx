/** @jsx jsx */
import { jsx } from "jsx";
import React from "react";
import themeSyntax from "../theme-syntax";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Logo from "components/Logo";
import Container from "components/Container";
import Card from "components/Card";
import { cardExample } from "constants/index";
function Home() {
  return (
    <div>
      <header px={[2, 3, 4]} py={2} borderBottom="1px solid" borderColor="black-20" display="flex" alignItems="center">
        <div maxWidth="6rem" mr={2}>
          <a display="block" href="/">
            <Logo color="rgba(0,0,0,.7)" />
          </a>
        </div>
        <a ml="auto" mr={3} fontSize={0} fontWeight={700} color="black" href="/components" title="Components">
          Components{" "}
        </a>
        <a fontSize={0} mr={3} fontWeight={700} color="black" href="/styles" title="Styles">
          Styles
        </a>
        <a fontSize={0} mr={3} fontWeight={700} color="black" href="/jsx-playground" title="Playground">
          Playground
        </a>
        <a
          fontSize={0}
          fontWeight={700}
          color="black"
          href="https://github.com/tachyons-css/tachyons-styled-react"
          title="GitHub"
        >
          GitHub
        </a>
      </header>

      <main>
        <Container pt={[3, 4]} pb={[5, 6, 7]} px={4}>
          <article>
            <h3>Card</h3>
            <LiveProvider theme={themeSyntax} scope={{ Card, jsx }} code={cardExample}>
              <LiveEditor />
              <LiveError />
              <div mt={3}>
                <LivePreview />
              </div>
            </LiveProvider>
            <pre></pre>
          </article>
        </Container>
      </main>
      <footer borderTop="1px solid" borderColor="black-20" px={4} py={4} display="flex">
        <div>
          <a color="black" py={1} fontWeight={700} href="https://tachyons.io" title="Tachyons">
            Tachyons
          </a>
          <br />
          <a color="black" py={1} fontWeight={700} href="https://tachyons.io/docs" title="Tachyons Docs">
            Docs
          </a>
          <br />
          <a color="black" py={1} fontWeight={700} href="https://github.com/tachyons-css/generator" title="Tachyons">
            Generator
          </a>
          <br />
        </div>
        <div ml="auto" width={144}>
          <a color="black" py={1} fontWeight={700} href="https://opencollective.com/tachyons" title="Tachyons">
            Open Collective
          </a>
          <br />
          <a color="black" py={1} fontWeight={700} href="https://github.com/tachyons-css" title="Tachyons">
            GitHub
          </a>
          <br />
          <a color="black" py={1} fontWeight={700} href="https://twitter.com/tachyons_css" title="Tachyons">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
