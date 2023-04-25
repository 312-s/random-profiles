import {Modal, StyleSheet, Text, View} from "react-native";
import {Button, Icon, Input} from "@rneui/themed";
import colors from "../../ui-components//config/colors.js";

/**
 * Assign the project to an employee.
 * @param {Object} props - The component properties.
 * @param {boolean} props.visible - If true modal is shown, else hide.
 * @param {Object} props.editingProfile
 * @param {function} props.onClose - The callback function called when the modal is closed
 */
export default function EditModal(props) {
    let updatedName = props.editingProfile.name;
    let updatedFullname = props.editingProfile.fullName;
    let updatedNumberPhone = props.editingProfile.numberPhone;
    let updatedAddress = props.editingProfile.address;

    function save() {
        props.editingProfile.name = updatedName;
        props.editingProfile.fullName = updatedFullname;
        props.editingProfile.numberPhone = updatedNumberPhone;
        props.editingProfile.address = updatedAddress;

        props.onClose();
    }

    function close() {
        props.onClose();
    }

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.modal}>
                <View>
                    <Input
                        style={styles.input.base}
                        inputContainerStyle={styles.input.container}
                        defaultValue={updatedName}
                        onChangeText={value => updatedName = value}
                        placeholder='Profile name'
                        errorStyle={{color: 'red'}}
                        leftIconContainerStyle={styles.input.icon}
                        leftIcon={
                            <Icon name='edit' size={24} color={colors.white} />
                        }
                    />
                    <Input
                        style={styles.input.base}
                        inputContainerStyle={styles.input.container}
                        defaultValue={updatedFullname}
                        onChangeText={value => updatedFullname = value}
                        placeholder='Enter fullname'
                        errorStyle={{color: 'red'}}
                        leftIconContainerStyle={styles.input.icon}
                        leftIcon={
                            <Icon name='person' size={24} color={colors.white} />
                        }
                    />
                    <Input
                        style={styles.input.base}
                        inputContainerStyle={styles.input.container}
                        defaultValue={updatedNumberPhone}
                        onChangeText={value => updatedNumberPhone = value}
                        placeholder='Enter phone-number'
                        errorStyle={{color: 'red'}}
                        leftIconContainerStyle={styles.input.icon}
                        leftIcon={
                            <Icon name='call' size={24} color={colors.white} />
                        }
                    />
                    <Input
                        style={styles.input.base}
                        inputContainerStyle={styles.input.container}
                        defaultValue={updatedAddress}
                        onChangeText={value => updatedAddress = value}
                        placeholder='Enter address'
                        errorStyle={{color: 'red'}}
                        leftIconContainerStyle={styles.input.icon}
                        leftIcon={
                            <Icon name='place' size={24} color={colors.white} />
                        }
                    />
                </View>
                <View style={styles.modalControlSection}>
                    <Button type="clear" title={'close'} onPress={close}>
                        <Text style={{color: colors.white}}>Cansel</Text>
                    </Button>
                    <Button type="clear" title={'save'} onPress={save}>
                        <Text style={{color: colors.white}}>Save</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modal: {
        height: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: colors.black
    },
    input: {
        base: {
            height: 40,
            fontSize: 16,
            color: colors.white,
        },
        container: {
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
        },
        icon: {
            marginRight: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }
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
    },
    icon: {
        color: colors.white
    }
});
