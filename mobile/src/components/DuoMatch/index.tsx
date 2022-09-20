import {
  ActivityIndicator,
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { CheckCircle } from "phosphor-react-native";
import { Header } from "../Header";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopying(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "Usuário copiado pra você colar no Discord 🙂"
    );

    setIsCopying(false);
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              size={20}
              name="close"
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} weight="bold" color={THEME.COLORS.SUCCESS} />

          <Header
            title="Let's play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no discord</Text>

          <TouchableOpacity
            disabled={isCopying}
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
          >
            {isCopying ? (
              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
            ) : (
              <Text style={styles.discord}>{discord}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
