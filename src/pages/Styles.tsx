/** @jsx jsx */
import jsx from "jsx";
import React, { Fragment } from "react";
import theme from "theme";
import chroma from "chroma-js";

import Logo from "components/Logo";
import Container from "components/Container";

const fontSizes = [...theme.fontSizes];
const space = [...theme.space];

function Styles() {
  return (
    <div>
      <header px={4} py={2} borderBottom="1px solid" borderColor="black-20" display="flex" alignItems="center">
        <div maxWidth="6rem">
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
      <Container>
        <section p={4}>
          <h2>Typefaces</h2>
          {Object.keys(theme.typefaces).map((keyName, i) => (
            <div key={i} mt={5} mb={6}>
              <h4 mt={0} mb={2} fontSize={4} textStyle="capitalize" lineHeight={1}>
                {keyName === "sansSerif" ? "Sans Serif" : keyName}
              </h4>
              <code display="block" fontSize="14px" mt={0} mb={4} pb={2} borderBottom="1px solid black">
                {theme.typefaces[keyName]}
              </code>
              <div style={{ fontFamily: theme.typefaces[keyName] }} lineHeight={1} mt={0} fontSize={1}>
                <span fontSize={1} display="block">
                  27/9/19
                </span>
                <h3 fontWeight={700} my={3} fontSize={[5, 6]}>
                  An engaging headline
                </h3>
                <p fontWeight={600} fontSize={[3, 4]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat.
                </p>
                <p fontWeight={400} fontSize={2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          ))}
        </section>
        <section px={4} py={5}>
          <h2>Type Scale</h2>
          <div style={{ overflowX: "scroll" }}>
            {fontSizes.reverse().map((fontSize, i) => (
              <Fragment key="i">
                <h5 fontWeight={800} mt={0} mb={0}>
                  {fontSize}px{" "}
                  <span pl={3} fontWeight={500} color="black-70">
                    theme.fontSizes[{(theme.fontSizes as number[]).length - i - 1}]
                  </span>
                </h5>
                <p
                  lineHeight={1}
                  mt={0}
                  mb={5}
                  fontSize={(theme.fontSizes as number[]).length - i - 1}
                  fontWeight={700}
                  style={{ whiteSpace: "nowrap" }}
                >
                  The quick brown fox jumped
                </p>
              </Fragment>
            ))}
          </div>
        </section>
        <section px={4} py={4}>
          <h2>Leading</h2>
          <div display={["flex"]} flexWrap={["wrap", "nowrap"]} mx={[0, -3]}>
            {(theme.lineHeights as string[]).map((lineHeight, i) => (
              <div width={[1, 1 / 3]} px={[0, 3]} key={i + lineHeight}>
                <h5 fontWeight={800} mt={0} mb={2}>
                  Line Height: {lineHeight}
                </h5>
                <p lineHeight={lineHeight} mt={4} mb={0} fontSize={3} fontWeight={600}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <p fontSize={2} mb={5} mt={2} lineHeight={lineHeight}>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section px={[0, 4]} py={5} style={{ overflowX: "scroll" }}>
          <h2 px={[4, 0]}>Colors</h2>
          <table>
            {Object.keys(theme.colors).map((keyName, i) => (
              <tr key={i}>
                <td
                  py={3}
                  width={24}
                  borderBottom="1px solid"
                  bg={theme.colors[keyName]}
                  color="white"
                  borderColor={theme.colors[keyName]}
                  pl={3}
                  fontWeight={700}
                  fontSize={0}
                >
                  <span color="black">{chroma.contrast(theme.colors[keyName], "black").toFixed(2)}</span>
                </td>
                <td
                  borderBottom="1px solid"
                  bg={theme.colors[keyName]}
                  color="white"
                  borderColor={theme.colors[keyName]}
                  fontWeight={700}
                  fontSize={0}
                >
                  <span
                    px={2}
                    py={1}
                    borderBottom="1px solid"
                    borderColor={theme.colors[keyName]}
                    width={48}
                    bg="black"
                    color={theme.colors[keyName]}
                    fontWeight={700}
                  >
                    Aa
                  </span>
                </td>
                <td
                  width={24}
                  borderBottom="1px solid"
                  bg={theme.colors[keyName]}
                  color="white"
                  borderColor={theme.colors[keyName]}
                  fontWeight={700}
                  fontSize={0}
                >
                  {chroma.contrast(theme.colors[keyName], "white").toFixed(2)}
                </td>
                <td
                  borderBottom="1px solid"
                  bg={theme.colors[keyName]}
                  color="white"
                  borderColor={theme.colors[keyName]}
                  fontWeight={700}
                  fontSize={0}
                >
                  <span
                    px={2}
                    py={1}
                    borderBottom="1px solid"
                    borderColor={theme.colors[keyName]}
                    width={48}
                    bg="white"
                    color={theme.colors[keyName]}
                    fontWeight={700}
                  >
                    Aa
                  </span>
                </td>
                <td
                  borderBottom="1px solid"
                  borderColor={theme.colors[keyName]}
                  px={[0, 3]}
                  fontWeight={700}
                  fontSize={[1, 2, 3]}
                >
                  {keyName}
                </td>
                <td
                  borderBottom="1px solid"
                  borderColor={theme.colors[keyName]}
                  px={[0, 3]}
                  textAlign="right"
                  bg="white"
                  width="auto"
                  fontSize={[0, 1, 1]}
                >
                  {theme.colors[keyName]}
                </td>
              </tr>
            ))}
          </table>
        </section>
        <section py={5} px={4}>
          <h2>Spacing Scale</h2>
          <div style={{ overflowX: "scroll" }}>
            <div position="relative" mb={2} height={32}>
              {space.reverse().map((space, i) => (
                <div
                  key={i}
                  title={space as string}
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  width={space}
                  height={32}
                  bg="black-10"
                  borderRight="1px solid rgba(0,0,0,.1)"
                >
                  {" "}
                </div>
              ))}
            </div>
            <div display="flex">
              <div
                mr={2}
                position="relative"
                width={(theme.space as number[])[(theme.space as number[]).length - 1]}
                height={(theme.space as number[])[(theme.space as number[]).length - 1]}
              >
                {space.reverse().map((space, i) => (
                  <div
                    key={i}
                    border="1px solid rgba(0,0,0,.1)"
                    title={space as string}
                    position="absolute"
                    top="50%"
                    right="50%"
                    width={space}
                    height={space}
                    bg="black-10"
                    style={{ transform: "translate(50%,-50%)" }}
                  >
                    {" "}
                  </div>
                ))}
              </div>
              <div
                position="relative"
                mb={2}
                width={32}
                height={(theme.space as number[])[(theme.space as number[]).length - 1]}
              >
                {space.reverse().map((space, i) => (
                  <div
                    key={i}
                    title={space as string}
                    position="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    width={32}
                    height={space}
                    bg="black-10"
                    borderBottom="1px solid rgba(0,0,0,.1)"
                  >
                    {" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section mt={2} py={5} px={4}>
          <h2>Border Widths</h2>
          <div position="relative">
            {(theme.borderWidths as string[]).map((borderWidth, i) => (
              <Fragment key={i}>
                <div mb={3}>
                  <div border={borderWidth + " solid black"} />
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section py={5} px={4}>
          <h2>Border Radii</h2>
          <div display="flex" mx={-3} maxWidth="100%" style={{ overflowX: "scroll" }}>
            {(theme.radii as string[]).map((radius, i) => (
              <Fragment key={i}>
                <div mb={3} px={3}>
                  <div borderRadius={radius} bg="black" width="auto" height="auto" p={5} />
                  <p mt={0} mb={0} textAlign="center">
                    {radius}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      </Container>
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

export default Styles;
