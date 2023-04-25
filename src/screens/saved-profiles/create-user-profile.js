import {StyleSheet, Text, View} from "react-native";
import {Button} from "@rneui/themed";
import { Icon } from '@rneui/themed';
import Field from "../../ui-components/Field.js";
import colors from "../../ui-components//config/colors.js";


/**
 * Assign the project to an employee.
 * @param {number} index - Index of UserProfile element in array.
 * @param {UserProfile} userProfile - UserProfile class
 * @param {function} onEdit - The callback function called when edit button is pressed
 * @param {function} onRemove - The callback function called when remove button is pressed
 */
export default function CreateUserProfile(index, userProfile, onEdit, onRemove) {
    function edit() {
        onEdit(index);
    }

    function remove() {
        onRemove(index);
    }

    return (
        <View key={userProfile.fullName} style={styles.profile}>
            <Text style={styles.index}>{(index + 1).toString().padStart(2, '0')}</Text>
            <Field style={styles.profileItem} iconName="edit" value={userProfile.name}/>
            <Field style={styles.profileItem} iconName="person" value={userProfile.fullName}/>
            <Field style={styles.profileItem} iconName="call" value={userProfile.numberPhone}/>
            <Field style={styles.profileItem} iconName="place" value={userProfile.address}/>
            <View style={styles.profileControlSection}>
                <Button type="clear" onPress={edit}><Icon name="edit" size={24} color={colors.white} /></Button>
                <Button type="clear" onPress={remove}><Icon name="delete" size={24} color={colors.white} /></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileItem: {
        marginTop: 7,
    },
    profileControlSection: {
        justifyContent: "flex-end",
        flexDirection: 'row'
    },
})
