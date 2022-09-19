import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Header } from "../../components/Header";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { useEffect, useState } from "react";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://10.0.0.199:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setDuos(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Header title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          horizontal
          style={styles.containerList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
          contentContainerStyle={
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          }
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
