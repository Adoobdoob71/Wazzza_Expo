import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { IconButton, withTheme } from "react-native-paper";
import EventCard from "../components/EventCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByTime: true,
      data: [1, 2, 3],
    };
  }

  render() {
    const toggleSort = () =>
      this.setState({ sortByTime: !this.state.sortByTime });
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
      sortByButton: {
        marginStart: "auto",
      },
      scrollbar: {
        width: 2,
        backgroundColor: colors.primary,
      },
    });
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={styles.header}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: "https://images4.alphacoders.com/100/thumb-350-1008904.png",
            }}
          />
          <Text style={styles.headerTitle}>Wazzza</Text>
          <IconButton
            icon={this.state.sortByTime ? "clock-outline" : "fire"}
            style={styles.sortByButton}
            color={colors.primary}
            onPress={toggleSort}
          />
        </View>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(key) => key + ""}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 0.5,
                width: "100%",
                backgroundColor: colors.placeholder,
              }}></View>
          )}
          renderItem={({ item }) => <EventCard Item={item} />}
        />
      </SafeAreaView>
    );
  }
}

export default withTheme(Home);
