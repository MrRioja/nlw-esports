import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 311,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.SHAPE,
  },
  closeIcon: {
    margin: 16,
    alignSelf: "flex-end",
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
  },
  discordButton: {
    width: 231,
    height: 48,
    borderRadius: 4,
    marginBottom: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
