import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function TBD() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.text}>TDB</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});
