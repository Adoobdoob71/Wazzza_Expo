import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { IconButton, withTheme } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joined: false,
    };
  }

  render() {
    const toggleJoined = () => this.setState({ joined: !this.state.joined });
    const colors = this.props.theme.colors;
    const styles = StyleSheet.create({
      body: {
        flexDirection: "column",
        backgroundColor: colors.card,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      participantsView: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
      },
      top: {
        flexDirection: "row",
        alignItems: "center",
      },
      participantImage: {
        width: 21,
        height: 21,
        borderRadius: 10.5,
      },
      participantText: {
        color: colors.text,
        fontSize: 14,
        marginHorizontal: 6,
      },
      middle: {
        flexDirection: "column",
      },
      middleTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.text,
      },
      middleSubTitle: {
        fontSize: 14,
        color: colors.text,
        marginTop: 8,
      },
      middleTime: {
        fontSize: 14,
        color: colors.placeholder,
        marginStart: "auto",
        marginEnd: 8,
      },
      middleLink: {
        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: 4,
      },
      middleLinkName: {
        color: colors.link,
        fontSize: 14,
        marginStart: 2,
      },
      eventImage: {
        width: "100%",
        height: 200,
        borderRadius: 6,
        alignSelf: "center",
        marginTop: 8,
      },
      bottom: {
        flexDirection: "row",
        alignItems: "center",
      },
    });
    return (
      <View style={styles.body}>
        <View style={styles.top}>
          <View style={styles.participantsView}>
            <Image
              style={styles.participantImage}
              source={{
                uri:
                  "https://images4.alphacoders.com/100/thumb-350-1008904.png",
              }}
            />
            <Image
              style={[styles.participantImage, { marginStart: -6 }]}
              source={{
                uri:
                  "https://images4.alphacoders.com/100/thumb-350-1008904.png",
              }}
            />
            <Image
              style={[styles.participantImage, { marginStart: -6 }]}
              source={{
                uri:
                  "https://images4.alphacoders.com/100/thumb-350-1008904.png",
              }}
            />
            <Text style={styles.participantText}>+3 more</Text>
          </View>
          <IconButton
            icon={this.state.joined ? "check-circle" : "circle-outline"}
            color={colors.join}
            size={18}
            onPress={toggleJoined}
          />
        </View>
        <View style={styles.middle}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.middleTitle}>We're going on a trip!!!</Text>
            <Text style={styles.middleTime}>3m</Text>
          </View>
          <Text style={styles.middleSubTitle}>
            Join us if you're feeling adventerous!
          </Text>
          <View style={styles.middleLink}>
            <MaterialCommunityIcons
              name="map-marker"
              color={colors.link}
              size={16}
            />
            <Text style={styles.middleLinkName}>Park Ver' Mont</Text>
          </View>
          <Image
            style={styles.eventImage}
            source={{
              uri: "https://images4.alphacoders.com/100/thumb-350-1008904.png",
            }}
          />
        </View>
        <View style={styles.bottom}>
          <IconButton icon="dots-vertical" color={colors.text} size={18} />
          <IconButton
            icon="chevron-right"
            color={colors.primary}
            size={18}
            style={{ marginStart: "auto" }}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(EventCard);
