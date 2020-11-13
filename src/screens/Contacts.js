import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { IconButton, withTheme } from "react-native-paper";
import Contact from "../components/Contact";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    };
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
      headerTitle: {
        fontSize: 21,
        color: colors.text,
        marginStart: 12,
        fontWeight: "bold",
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
          <Text style={styles.headerTitle}>Contacts</Text>
          <IconButton
            icon="settings"
            color={colors.primary}
            style={{ marginStart: "auto" }}
          />
        </View>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(key) => key + ""}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: colors.placeholder,
                height: 0.5,
                marginHorizontal: 24,
              }}></View>
          )}
          renderItem={({ item }) => <Contact Item={item} />}
        />
      </SafeAreaView>
    );
  }
}

export default withTheme(Contacts);
