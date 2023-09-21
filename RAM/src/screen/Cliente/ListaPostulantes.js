import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import Postulante from "../../components/Postulante";
import { SvgXml } from "react-native-svg";
import { apiClient } from "../../api/ApiClient";

export default function ListaPostulantes({ params }) {

  const [userDetails, setUserDetails] = useState(null);
  const [postulantes, setPostulantes] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  const navigation = useNavigation();
  const route = useRoute();
  const { vacanteId } = route.params;

  const goToDetallePostulante = (postulacionId) => {
    navigation.navigate("DetallesPostulanteScreen", { postulacionId });
  };

  const fetchDataPostulantes = async () => {
    try {
      const response = await apiClient.get(`api/v1/auth/postulacion/vacante/${vacanteId}`)
      setPostulantes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDataPostulantes();
    setRefreshing(false);
  })

  useEffect(() => {
    fetchDataPostulantes();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchDataPostulantes();
    }, [])
  );

  const renderItem = ({ item }) => (
    <Postulante
      action={() => goToDetallePostulante(item.id)}
      nombre={`${item.usuario.firstname} ${item.usuario.lastname}`}
      edad={item.edad}
      ubicacion={item.location}
    />
  )

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.containerSvg} >
              <SvgXml xml={fondoSvg2} />
              <Text style={styles.svgText} >Postulantes</Text>
            </View>
      <FlatList
        data={postulantes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <View>
            <Text>No hay postulantes aún</Text>
            {/* <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> */}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerSvg: {
    alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 30,
  },
  svgText: {
      position: "absolute",
      top: 25,
      fontSize: 40,
      color: "white",
      fontWeight: "bold",
      textShadowRadius: 3,
    },
  
});

const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`;
