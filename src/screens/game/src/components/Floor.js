import Matter from 'matter-js';
import React from 'react';
import {View, Image} from 'react-native';

const Floor = props => {
  const img = require('../assets/images/floor.png');
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heighthBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heighthBody / 2;

  /*  calculate how many times repeat floor */

  const imageIterations = Math.ceil(widthBody / heighthBody);

  return (
    <View
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heighthBody,
        overflow: 'hidden',
        flexDirection: 'row',
      }}>
      {Array.apply(null, Array(imageIterations)).map((element, index) => {
        return (
          <Image
            style={{width: heighthBody, height: heighthBody}}
            key={index}
            resizeMode="stretch"
            source={img}
          />
        );
      })}
    </View>
  );
};

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'Floor',
      isStatic: true,
    },
  );
  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />,
  };
};
