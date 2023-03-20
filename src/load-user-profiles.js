import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function loadUserProfiles() {
    return AsyncStorage.getItem('savedUserProfiles')
        .then(response => JSON.parse(response));
}