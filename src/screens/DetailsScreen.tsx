import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainInfo} from '../components/MainInfo';
import {InfoRow} from '../components/InfoRow';
import {weatherData} from '../data/weatherData';
import {RootStackParamList, RouteNames} from '../navigation/types';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RouteNames.Details
>;

export const DetailsScreen = ({route}: DetailsScreenProps) => {
  const cityId = route.params?.id;

  const screenData = weatherData.find(data => data.id === cityId);

  if (!screenData) {
    return (
      <View style={styles.noDataViewWrapper}>
        <Text>No data found :(</Text>
      </View>
    );
  }

  const {name, conditions, temp, humidity, pressure, windSpeed, cloudCover} =
    screenData;

  return (
    <>
      <MainInfo name={name} conditions={conditions} temp={temp} />
      <InfoRow title="humidity" value={`${humidity}%`} />
      <InfoRow title="pressure" value={`${pressure} hPa`} />
      <InfoRow title="wind speed" value={`${windSpeed} km/h`} />
      <InfoRow title="cloud cover" value={`${cloudCover}%`} />
    </>
  );
};

const styles = StyleSheet.create({
  noDataViewWrapper: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',
  },
});
