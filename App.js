import {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import SavedProfilesScreen from './src/screens/saved-profiles/saved-profiles-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from './src/ui-components/colors.js';
import GenerateScreen from './src/screens/generate-screen.js';
import ProfilesUsers from './src/context/profiles-context.js';
import loadUserProfiles from './src/code/load-user-profiles.js';
import saveUserProfile from './src/code/save-user-profiles.js';

const Stack = createNativeStackNavigator();

function HomeScreen(navigator) {
    return (
        <View style={styles.screen}>
            <GenerateScreen navigation={navigator.navigation}/>
            <StatusBar backgroundColor={colors.black}/>
        </View>
    );
}

export default function App() {
    const [profilesUsers, setProfilesUsers] = useState([]);

    useEffect(() => {
        loadUserProfiles().then(profiles => setProfilesUsers(profiles));
    }, []);

    useEffect(() => {
        saveUserProfile(profilesUsers);
    }, [profilesUsers]);

    return (
        <ProfilesUsers.Provider value={{profiles: profilesUsers, update: setProfilesUsers}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="SavedProfilesScreen" component={SavedProfilesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ProfilesUsers.Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black,
        paddingHorizontal: 20,
    },
});
