import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState, useContext } from "react";
import Field from "../ui-components/Field.js";
import colors from "../ui-components//config/colors.js";
import UserProfile from "../code/user-profile.js";
import ProfilesUsers from '../context/profiles-context';
import { Button, Icon } from '@rneui/themed';

export default function GenerateScreen({navigation}) {
    const [userProfile, setNewUserProfile] = useState(UserProfile.generateUserProfile)
    const usersProfilesContext = useContext(ProfilesUsers);
    const [modalVisible, setModalVisible] = useState(false);
    const [profileName, onChangeProfileName] = useState('');

    function save() {
        setModalVisible(false);
        const savingProfile = {
            name: profileName,
            fullName: userProfile.fullName,
            numberPhone: userProfile.phone,
            address: userProfile.address
        };
        usersProfilesContext.update([savingProfile].concat(usersProfilesContext.profiles));
        setNewUserProfile(UserProfile.generateUserProfile);
    }

    function profileNameGenerator() {
        const lastFiveSymbols = userProfile.phone.slice(userProfile.phone.length - 5);
        const lastFourDigit = lastFiveSymbols.replace('-', '');

        onChangeProfileName(`${userProfile.surname} ${userProfile.name[0]}. ${userProfile.patronymic[0]}. [${lastFourDigit}]`);
    }

    function renderGoToSavedProfilesScreenButton() {
        if (usersProfilesContext.profiles.length > 0) {
            return (<Button size="lg" buttonStyle={styles.switchToListPageButton} type="clear"
                    onPress={() => navigation.navigate('SavedProfilesScreen')}>
                <Icon name="list" size={24} color={colors.white}/>
            </Button>)
        }
    }

    return (
        <View style={styles.page}>
            <Modal animationType="slide" visible={modalVisible}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Enter name of the profile</Text>
                    <TextInput
                        allowFontScaling={true}
                        style={styles.input}
                        defaultValue={profileName}
                        onChangeText={text => onChangeProfileName(text)}
                    />
                    <View style={styles.modalControlSection}>
                        <Button type="clear" title={'close'} onPress={() => setModalVisible(false)}>
                            <Text style={{color: colors.white}}>Cansel</Text>
                        </Button>
                        <Button type="clear" title={'save'} onPress={() => save(userProfile)}>
                            <Text style={{color: colors.white}}>Save</Text>
                        </Button>
                    </View>
                </View>
            </Modal>

            {renderGoToSavedProfilesScreenButton()}

            <View style={styles.contentSection}>
                <Text style={styles.fullName}>{userProfile.fullName}</Text>

                <View style={styles.infoSection}>
                    <Field iconName="call" value={userProfile.phone}/>
                    <Field style={styles.infoItem} iconName="place" value={userProfile.address}/>
                </View>
            </View>

            <View style={styles.controlSection}>
                <Button type="clear"
                        onPress={() => setNewUserProfile(UserProfile.generateUserProfile)}>
                    <Icon name="refresh" type="material" size={24} color="white"/>
                </Button>
                <Button type="clear" title={'Save'} onPress={() => {
                    profileNameGenerator();
                    setModalVisible(true);
                }}>
                    <Icon name="bookmark" type="material" size={24} color="white"/>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    fullName: {
        fontSize: 48,
        color: 'white',
        fontWeight: '900',
    },
    infoSection: {
        marginVertical: 25,
    },
    infoItem: {
        marginTop: 10,
    },
    contentSection: {
        flex: 1,
        justifyContent: 'center',
    },
    controlSection: {
        flexDirection: 'row',
        alignSelf: "flex-end",
    },
    input: {
        height: 40,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        color: colors.white,
        fontSize: 16
    },
    modal: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.black
    },
    modalControlSection: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 20
    },
    modalTitle: {
        color: colors.white,
        fontSize: 25
    },
    switchToListPageButton: {
        flexBasis: 'auto',
        justifyContent: 'flex-end'
    }
});
