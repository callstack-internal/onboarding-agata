import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FullWeatherInfo} from '../types';
import {RouteNames} from '../navigation/types';
import {MainInfo} from './MainInfo';

export const ListItem = (props: FullWeatherInfo) => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate(RouteNames.Details, {item: props});
  };

  const {name, conditions, temp, iconUrl} = props;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityHint={`${name} weather details`}
      onPress={navigateToDetails}>
      <MainInfo
        name={name}
        conditions={conditions}
        temp={temp}
        iconUrl={iconUrl}
      />
    </TouchableOpacity>
  );
};
