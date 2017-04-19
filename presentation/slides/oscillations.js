import React from 'react';
import {
  Heading,
  Image,
  Fit,
  Fill,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { Chillwave, CodePen } from '../components';

import images from '../images';
import { f, s } from '../styles';

export const oscillationsSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Chillwave clr="#5a5ae6" size={3} />
    <Heading
      textColor="tertiary"
    >
      Waves &<br />Oscillations
    </Heading>
  </Slide>,
  <Slide bgColor="#440015" textColor="tertiary">
    <CodePen
      name="Sine" user="HunorMarton" id="ggQGqQ"
      themeId="29124" bgColor="#440015" color="#ff0050"
    />
  </Slide>,
  <Slide>
    <Image alt="hexagon" src={images.hexagon} width={500} />
  </Slide>,
  <Slide>
    <Heading fit textColor="red">Dave Whyte (bees & bombs)</Heading>
  </Slide>,
  <Slide className="flex">
    <div className="flex-auto flex flex-wrap" style={{ height: 600 }}>
      <div
        className="w-25 cover"
        style={{ background: `url(${images.cubewave}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.boxes}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.out}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.waveD}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.bouncers}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.dotLineWave}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.blob}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.weaves}) center` }}
      />
    </div>
  </Slide>,
  <Slide bgColor="pink">
    <Text fit textColor="red">
      - translation: xEnd = xStart + c [addition]
      - scaling: xEnd = 2 * xStart [multiplication]
      - rotation: xEnd = cosθ * xStart + sinθ * xStart [trignometry]
      + [Rocket around the moon](http://codepen.io/Yakudoo/pen/aOEeXB)
    </Text>
  </Slide>,
  <Slide bgColor="primary">
    <Heading fit textColor="red">many sine waves with slight offsets</Heading>
    <Heading fit textColor="red">1, 2, 3, many, multiple layers</Heading>
    <CodePen name="Waves" user="DonKarlssonSan" id="QGzqaM" bgColor="white" />
  </Slide>,
  <Slide bgColor="#141414">
    <Image src={images.swimmer} width={400} />
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Parameterization 💞 Oscillation</Heading>
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Explain swimmer</Heading>
  </Slide>,
];