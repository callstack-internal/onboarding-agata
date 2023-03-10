import React from 'react';
import {
  requireNativeComponent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  style: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
};

const Button = requireNativeComponent<ButtonProps>('NotificationButton');

type NotificationButtonProps = Pick<ButtonProps, 'onPress'>;

export const NotificationButton = ({onPress}: NotificationButtonProps) => {
  return <Button style={styles.button} text="Notify me!" onPress={onPress} />;
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 200,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
