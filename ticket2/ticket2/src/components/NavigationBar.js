import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 20,
    height: 60,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'orange',
    borderRadius: 5,
  }
});

export default NavigationBar;