import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainWeatherInfo} from '../types';
import {MainInfo} from './MainInfo';

type Props = {
  id: string;
} & MainWeatherInfo;
export const ListItem = ({name, conditions, temp, id}: Props) => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate('Details', {id});
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityHint={`${name} weather details`}
      onPress={navigateToDetails}>
      <MainInfo name={name} conditions={conditions} temp={temp} />
    </TouchableOpacity>
  );
};
