import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "20vh",
    backgroundColor: "#ffffff",
    width: "50%",
    borderWidth: 1,
    borderColor: "#ebebeb",
  },
  avatarContainer: {
    height: "100%",
    width: "25%",
    margin: 12,
    overflow: "hidden",
  },
  avatarImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    width: "75%",
  },
  user: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: { width: "100%", fontWeight: 800 },
  entryText: { width: "100%", color: "#6e6e6e" },
});
