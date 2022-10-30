import Matter from 'matter-js';
import React from 'react';
import {Image, View} from 'react-native';

const Bird = props => {
  const img1 = require('./../assets/images/b1/b1.png');
  const img2 = require('./../assets/images/b1/b2.png');
  const img3 = require('./../assets/images/b1/b3.png');

  let actualImg = `img+${props.pose || 1}`;

  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heighthBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heighthBody / 2;

  const color = props.color;

  return (
    <Image
      source={img1}
      resizeMode="stretch"
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heighthBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'Bird'},
  );
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
};
