import { View, Text } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { Fontisto } from '@react-native-vector-icons/fontisto';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconProps) => {
  switch (name) {
    case 'circle':
      return <Fontisto name="ellipse" size={38} color="#F7CD2E" />;
      break;
    case 'cross':
      return <Fontisto name="close-a" size={38} color="#38cc77" />;
      break;
    default:
      return <Fontisto name="eye" size={38} color="#0d0d0d" />;
  }
};

export default Icons;
