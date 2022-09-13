import { FlatList, Image, View } from "react-native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Header } from "../../components/Header";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Header
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        horizontal
        data={GAMES}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
}
