import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const colors = this.props.theme.colors;
    const styles = StyleSheet.create({
      body: {
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: colors.card,
      },
      profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginEnd: 10,
      },
      contactDetailsView: {
        flexDirection: "column",
        flex: 1,
      },
      contactNickname: {
        fontWeight: "bold",
        color: colors.text,
        fontSize: 16,
      },
      contactDescription: {
        color: colors.placeholder,
        fontSize: 14,
      },
    });
    return (
      <View style={styles.body}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: "https://images4.alphacoders.com/100/thumb-350-1008904.png",
          }}
        />
        <View style={styles.contactDetailsView}>
          <Text style={styles.contactNickname}>DoritoWizard</Text>
          <Text
            style={styles.contactDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            I like going on hikes with my family and friends
          </Text>
        </View>
      </View>
    );
  }
}

export default withTheme(Contact);
