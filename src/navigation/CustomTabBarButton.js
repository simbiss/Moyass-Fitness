import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Animated } from 'react-native';

const CustomTabBarButton = ({ children, onPress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(100));
  const [nom, setNom] = useState('');
  const [date, setDate] = useState('');
  const [cptPeak, setCptPeak] = useState({});

  const toggleOverlay = () => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsVisible(false));
    } else {
      setIsVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeOverlayWithoutSaving = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  const saveInteraction = () => {
    const interaction = {
      id: Date.now().toString(),
      date,
      cptPeakPerName: {
        [nom]: cptPeak,
      },
    };
    console.log('Saved Interaction:', interaction);
    toggleOverlay();
  };

  return (
    <>
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#7F5DF0',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}
        onPress={toggleOverlay}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent animationType="none">
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={closeOverlayWithoutSaving}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => { }}>
            <Animated.View
              style={[
                styles.overlay,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <View style={styles.overlayContent}>
                <TextInput
                  style={styles.input}
                  placeholder="Nom"
                  value={nom}
                  onChangeText={setNom}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Date"
                  value={date}
                  onChangeText={setDate}
                />
                <TextInput
                  style={styles.input}
                  placeholder="cptPeak value"
                  keyboardType="numeric"
                  onChangeText={(value) => setCptPeak(parseInt(value))}
                />
                <TouchableOpacity style={styles.button} onPress={saveInteraction}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  overlayContent: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e32f45',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomTabBarButton;
