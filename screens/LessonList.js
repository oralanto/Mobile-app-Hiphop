import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Video from "react-native-video";
import { ScrollView } from "react-native-gesture-handler";

const LessonList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text h1 style={styles.title}>
            La danse Hip-Hop
          </Text>
          <Card>
            <Text h2 style={styles.subTitle}>
              The BOUNCE
            </Text>
            <Text style={styles.description}>
              {" "}
              « Bounce » signifie « rebondir » en français, il suffit de fléchir
              légèrement les jambes pour imiter un rebond.
            </Text>
            <Button
              title="Bounce Vidéo"
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=F_xK9F9AP48")
              }
            />
            <Text style={styles.exercice}>A vous de jouer !</Text>
            <FlatList
              data={[
                { key: "Mettez une playlist Hiphop 'Boom bap' " },
                { key: "Faites des sessions de 1mn pour chaque exercice:" },
                { key: "1 - Effectuez le BOUNCE sur la musique" },
                { key: "2 - Variez le rythme" },
                { key: "3 - Variez la direction" },
                { key: "4 - Variez l'intensité" },
                { key: "Bonus: 4 - Bouger les bras" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </Card>
          <Card>
            <Text h2 style={styles.subTitle}>
              The ROCKING
            </Text>
            <Text style={styles.description}>
              {" "}
              « Rocking » veut dire « se balancer », il suffit balancer la
              partie supérieur de son corps vers l'avant puis vers l'arrière ou
              sur les cotés.
            </Text>
            <Button
              title="Rocking Vidéo"
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=ucItVcz5BHs")
              }
            />
            <Text style={styles.exercice}>A vous de jouer !</Text>
            <FlatList
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
  title: {
    width: "100%",
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "lightgray",
  },
  subTitle: {
    width: "100%",
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "lightgray",
  },
  description: {
    padding: 10,
    textAlign: "justify",
  },
  exercice: {
    padding: 10,
    textAlign: "justify",
  },
  item: {},
});
