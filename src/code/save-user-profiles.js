import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function saveUserProfile(savingProfiles) {
    AsyncStorage.setItem('savedUserProfiles', JSON.stringify(savingProfiles))
        .catch(error => console.error(error));
}
