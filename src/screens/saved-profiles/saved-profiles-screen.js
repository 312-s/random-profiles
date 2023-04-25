import {Text, StyleSheet, ScrollView} from 'react-native';
import {useState, useContext} from 'react';
import {Button, Icon} from '@rneui/themed';
import colors from '../../ui-components//config/colors.js';
import EditModal from './edit-modal.js';
import CreateUserProfile from './create-user-profile.js';
import ProfilesContext from '../../context/profiles-context';


export default function SavedProfilesScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [editingProfile, setEditingProfile] = useState({});
    const {profiles, update} = useContext(ProfilesContext);

    function removeProfile(index) {
        profiles.splice(index, 1);
        update([...profiles]);
    }

    function openEditMenu(index) {
        setModalVisible(true);
        setEditingProfile(profiles[index]);
    }

    function closeEditMenu() {
        setModalVisible(false);
    }

    return (
        <ScrollView style={styles.list}>
            <Button
                size="lg"
                buttonStyle={styles.backButton}
                title={'back'}
                type="clear"
                onPress={navigation.goBack}
            >
                <Icon name="arrow-back" size={24} color={colors.white}/>
            </Button>

            <EditModal
                visible={modalVisible}
                editingProfile={editingProfile}
                onClose={closeEditMenu}
            />
            <Text style={styles.title}>Saved Profiles</Text>

            {profiles.map((userProfile, index) => CreateUserProfile(index, userProfile, () => openEditMenu(index), removeProfile))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profile: {
        marginTop: 40,
    },
    backButton: {
        width: 60,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 48,
        marginTop: 150,
        fontWeight: '900',
        color: colors.white,
    },
    index: {
        color: colors.white,
        fontWeight: '900',
        fontSize: 92,
        position: 'absolute',
        top: -70,
        right: 0,
        opacity: 0.3,
        zIndex: -1,
    },
    list: {
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: colors.black,
    },
});
