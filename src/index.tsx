import { View, Modal, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';

export const TrackScreen = () => {
};

export const SpotCheck: React.FC = () => {

  return (
    <View
      style={{
        marginTop: 200,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
      }}
    >
      <Modal animationType="slide" transparent={true} visible={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              elevation: 5,
              height: '100%',
            }}
          >

              <Button title="Close" onPress={() => {}} />
            
            <WebView
              source={{ uri: 'https://reactnative.dev/' }}
              style={{ width: 200 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};