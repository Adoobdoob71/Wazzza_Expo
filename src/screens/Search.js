import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, withTheme } from "react-native-paper";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const colors = this.props.theme.colors;
    const styles = StyleSheet.create({
      header: {
        flexDirection: "row",
        backgroundColor: colors.card,
        height: 56,
        paddingStart: 12,
        paddingEnd: 8,
        alignItems: "center",
        elevation: 4,
      },
      profilePicture: {
        width: 36,
        height: 36,
        borderRadius: 18,
      },
      searchButton: {
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 8,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.primary,
      },
      searchText: {
        fontSize: 14,
        color: colors.text,
      },
    });
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: "https://images4.alphacoders.com/100/thumb-350-1008904.png",
            }}
          />
          <View style={styles.searchButton}>
            <Text style={styles.searchText}>Search something...</Text>
          </View>
          <IconButton icon="settings" color={colors.primary} size={24} />
        </View>
      </SafeAreaView>
    );
  }
}
export default withTheme(Search);
