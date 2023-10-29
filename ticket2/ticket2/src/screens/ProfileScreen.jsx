
import React from 'react'
import { StatusBar, StyleSheet, Text, View, BackHandler } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = ( { navigation } ) => {
  const handleExitPress = () => {
    BackHandler.exitApp();
  };
  return (
    
    <>

    <View style={styles.container}>

      <Header />

      <View style={styles.mainContainer}>

          <View style={styles.namesContainers}>

              <View style={styles.initialsName}>

                  <Text style={styles.initialsLetters}>LM</Text>

              </View>

              <View>
                  
                    <Text style={styles.dataTexts}>Lucila Martinez</Text>
                    <Text style={styles.dataTexts}>44000000</Text>
                    <Text style={styles.dataTexts}>lucila@gmail.com</Text>


              </View>


          </View>

          <View style={styles.dataContainer}>

              <Text style={{fontSize: 15}}>Lorem323ipsumd3232olor</Text>

          </View>

      </View>

      <View>

      <AppButton
        textButton="Last Reservations"
        color="#e38b3d"
        onPress={() => navigation.navigate('LastReservations')}
      >
        <Icon name="location" size={20} color="white" style={{ marginRight: 10 }} />
      </AppButton>

        <AppButton 
        textButton="Edit" 
        color="#e38b3d" 
        >
          <Icon name="pencil" size={20} color="white" style={{ marginRight: 10 }} />
        </AppButton>
        <AppButton 
        textButton="Exit" 
        color="#e38b3d" 
        onPress={handleExitPress}
        >
          <Icon name="exit" size={20} color="white" style={{ marginRight: 10 }} />
        </AppButton>

      </View>

      <StatusBar style="auto" />

      <NavigationBar navigation={navigation} />

    </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  mainContainer: {
    // flex: 1,
    backgroundColor: '#cfbeb0',
    justifyContent: 'top',
    // poneme un border de un pixel
    borderWidth: 1,
    padding: 20,
    margin: 20,
    // poneme la letra mas grande
  },
  namesContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  initialsName: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  initialsLetters: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataTexts: {
    fontSize: 20,
  }
});