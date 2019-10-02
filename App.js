/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CodeInput from 'react-native-confirmation-code-field';

const App: () => React$Node = () => {
  const phoneNumber = '+32 2 400 44 55';

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <Text style={styles.descriptionText}>
                Enter the 6 digit code sent to you at {phoneNumber}
              </Text>
              <View style={styles.form}>
                <CodeInput
                  codeLength={6}
                  onFulfill={code => this.setState({ code })}
                  cellBorderWidth={3}
                  size={28}
                  space={16}
                  variant="border-b"
                />
              </View>
            </View>
          </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#174FA0',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: 50,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
  },
  descriptionText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  form: {
    marginTop: 20,
  },
});

export default App;
