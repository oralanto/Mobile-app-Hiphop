import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
} from "react-native";
import { Card } from "react-native-elements";
import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native-gesture-handler";

import colors from "../assets/colors";

const LessonList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text h1 style={styles.title}>
            La danse Hip-Hop
          </Text>
          <Card>
            <Text h2 style={styles.title}>
              The BOUNCE
            </Text>
            <Text style={styles.description}>
              {" "}
              « Bounce » signifie « rebondir » en français, il suffit de fléchir
              légèrement les jambes pour imiter un rebond.
            </Text>
            <YoutubePlayer height={300} play={false} videoId={"F_xK9F9AP48"} />
            <Text style={styles.exercice}>A vous de jouer !</Text>
            <FlatList
              style={styles.exercice}
              data={[
                { key: "Mettez une playlist Hiphop 'Boom bap' " },
                { key: "Faites des sessions de 1mn pour chaque exercice:" },
                { key: "1 - Effectuez le BOUNCE sur la musique" },
                { key: "2 - Variez le rythme" },
                { key: "3 - Variez la direction" },
                { key: "4 - Variez l'intensité" },
                { key: "Bonus: 4 - Bougez les bras" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </Card>
          <Card>
            <Text h2 style={styles.title}>
              The ROCKING
            </Text>
            <Text style={styles.description}>
              {" "}
              « Rocking » veut dire « se balancer », il suffit balancer la
              partie supérieur de son corps vers l'avant puis vers l'arrière ou
              sur les cotés.
            </Text>
            <YoutubePlayer height={300} play={false} videoId={"ucItVcz5BHs"} />
            <Text style={styles.exercice}>A vous de jouer !</Text>
            <FlatList
              style={styles.exercice}
              data={[
                { key: "Mettez une playlist Hiphop 'Boom bap' " },
                { key: "Faites des sessions de 1mn pour chaque exercice:" },
                { key: "1 - Effectuez le ROCKING sur la musique" },
                { key: "2 - Variez le rythme" },
                { key: "3 - Variez la direction" },
                { key: "4 - Variez l'intensité" },
                { key: "Bonus: 4 - Ajoutez le BOUNCE" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  title: {
    width: "100%",
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.title,
    backgroundColor: colors.primary,
  },
  description: {
    padding: 10,
    marginBottom: 10,
    textAlign: "justify",
    color: colors.text,
  },
  exercice: {
    padding: 10,
    margin: 5,
    textAlign: "center",
    backgroundColor: colors.secondary,
    color: colors.light,
  },
  item: {
    color: colors.light,
    margin: 2,
  },
});
