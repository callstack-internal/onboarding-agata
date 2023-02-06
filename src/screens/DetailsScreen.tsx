import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MainInfo} from '../components/MainInfo';
import {weatherData} from '../data/weatherData';
import {COLORS} from '../styles/colors';

export const DetailsScreen = ({route}) => {
  const cityId = route.params?.id;

  const screenData = weatherData.find(data => data.id === cityId);

  if (!screenData) {
    return (
      <View>
        <Text>No data found</Text>
      </View>
    );
  }

  const {name, conditions, temp, humidity, pressure, windSpeed, cloudCover} =
    screenData;

  return (
    <View>
      <MainInfo name={name} conditions={conditions} temp={temp} />
      <View style={styles.infoRow}>
        <Text>Humidity:</Text>
        <Text style={styles.dataValueText}>{humidity}%</Text>
      </View>
      <View style={styles.infoRow}>
        <Text>Pressure:</Text>
        <Text style={styles.dataValueText}>{pressure} hPa</Text>
      </View>
      <View style={styles.infoRow}>
        <Text>Wind Speed:</Text>
        <Text style={styles.dataValueText}>{windSpeed} km/h</Text>
      </View>
      <View style={styles.infoRow}>
        <Text>Cloud Cover:</Text>
        <Text style={styles.dataValueText}>{cloudCover}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    padding: 15,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dataValueText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
});
