import React, { useEffect, useCallback, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ScrollView,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Trabajo from "../../components/Trabajo";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import NoJobsAvailable from "../../assets/NoJobsAvailable.png";
import { FontAwesome } from "@expo/vector-icons";
import { apiClient } from "../../api/ApiClient";

export default function TrabajosPublicados() {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobs, setJobs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchDataAndJobs = async () => {
        try {
            const response = await apiClient.get("/api/v1/auth/vacantes");
            setJobs(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchDataAndJobs();
        setRefreshing(false);
    }, []);

    const navigation = useNavigation();

    const goToTrabajo = (vacante) => {
        navigation.navigate("Detalle", {
            vacante: vacante
        });
    };

    useEffect(() => {
        fetchDataAndJobs();
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchDataAndJobs();
        }, [])
    );

    const renderItem = ({ item }) => (
        <Trabajo
            banos={item.numBanios}
            habitaciones={item.numHabitaciones}
            extras={item.extras}
            descripcion={item.descripcion}
            total={item.total}
            photo={item.photo}
            action={() => goToTrabajo(item)}
        />
    );

    const filteredJobs = searchTerm
        ? jobs.filter((job) => {
            const descripcionMatches = job.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
            const totalMatches = job.total.toString().includes(searchTerm); // Convertir total a cadena y verificar si incluye el término
            return descripcionMatches || totalMatches; // Retornar verdadero si alguna de las verificaciones es verdadera
        })
        : jobs;


    return (
        <SafeAreaView
            style={styles.mainContainer}
            edges={["right", "left", "top"]}
        >
            <View style={styles.searchBar}>
                <FontAwesome
                    name="user"
                    size={25}
                    color="#088BED"
                    style={styles.icon}
                />
                <View style={styles.inputContainer}>
                    <FontAwesome
                        name="search"
                        size={17}
                        color="#ccc"
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                    />
                    {searchTerm !== "" && (
                        <TouchableOpacity
                            onPress={() => setSearchTerm("")}
                            style={styles.clearButton}
                        >
                            <FontAwesome
                                name="times-circle"
                                size={20}
                                color="#088BED"
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {filteredJobs.length > 0 ? (
                <FlatList
                    style={styles.card}
                    data={filteredJobs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                />
            ) : (
                <ScrollView
                    contentContainerStyle={styles.noJobsContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.centerContainer}>
                        <Image
                            source={NoJobsAvailable}
                            style={styles.noJobsImage}
                        />
                        <Text style={styles.noJobsText}>
                            No hay trabajos disponibles
                        </Text>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 30,
        fontSize: 16,
    },
    clearButton: {
        marginLeft: 10,
    },
    card: {
        top: 1,
    },
    noJobsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    centerContainer: {
        alignItems: "center",
    },
    noJobsImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    noJobsText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        marginHorizontal: 5,
    },
});
