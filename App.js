import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
 <>
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      {/* <Card/> */}

      {/* <View style={{backgroundColor: '#f8f4f4', padding:20, paddingTop:100}}>
        <Card 
          title="Jean jacket for sale"
          subTitle="$100"
          image={require('./app/assets/jeanJacket.jpg')}
        />
      </View> */}

      {/* <ListingDetailScreen/> */}
      <GestureHandlerRootView style={{flex: 1}}>

      <MessagesScreen/>
      </GestureHandlerRootView>
 </>

  );
  
}


