import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function EvaluarServicio() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        console.log("Comentario: ", comment, "\nCalificacion: ", rating);
    };

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView
                style={styles.container}
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}
            >
                <Text style={styles.header}>Evaluar Cliente</Text>
                <Image
                    source={require("../../assets/casas.jpg")}
                    style={styles.imagen}
                />
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>Calificación:</Text>
                    <View style={styles.starsContainer}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <TouchableOpacity
                                key={value}
                                onPress={() => handleRating(value)}
                                style={styles.star}
                            >
                                <FontAwesome
                                    name={rating >= value ? "star" : "star-o"}
                                    size={30}
                                    color={rating >= value ? "#FFD700" : "#ccc"}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.commentContainer}>
                    <Text style={styles.commentText}>Comentario:</Text>
                    <TextInput
                        style={styles.commentInput}
                        placeholder="Escribe tu comentario aquí..."
                        value={comment}
                        onChangeText={(text) => setComment(text)}
                        multiline
                    />
                </View>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Enviar Reseña</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "#F2F2F2",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    ratingContainer: {
        marginBottom: 20,
    },
    ratingText: {
        fontSize: 18,
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: "row",
    },
    star: {
        marginRight: 10,
    },
    commentContainer: {
        marginBottom: 20,
    },
    commentText: {
        fontSize: 18,
        marginBottom: 10,
    },
    commentInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        height: 200,
        textAlignVertical: "top",
    },
    submitButton: {
        backgroundColor: "#088BED",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    imagen: {
        width: "100%",
        height: 250,
        borderRadius: 20,
        marginRight: 10,
        resizeMode: "cover",
        marginBottom: 20,
    },
});
