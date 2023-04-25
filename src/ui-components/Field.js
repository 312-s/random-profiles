import {StyleSheet, Text, View} from 'react-native';
import { Icon } from '@rneui/themed';
import colors from ".//config/colors.js";

export default function Field(props) {

    return (<View style={StyleSheet.compose(styles.field, props.style)}>
        <Icon color={colors.white} style={styles.icon} name={props.iconName} />
        <Text style={styles.text}>{props.value}</Text>
    </View>);
}

const fontSize = 18;

const styles = StyleSheet.create({
    field: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 23,
        color: colors.white,
        marginRight: 25
    },
    text: {
        color: colors.white,
        fontSize: fontSize,
    }
});
