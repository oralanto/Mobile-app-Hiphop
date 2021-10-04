import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

import colors from "../assets/colors";

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text h1 style={styles.title}>
            La danse Hip-Hop
          </Text>
          <Text style={styles.description}>
            La danse hip-hop désigne plusieurs formes de street dance
            principalement effectuées dans la musique hip-hop et catégorisées
            dans sa culture. Elle dénombre plusieurs styles de danses tels que
            le breaking, le locking, la house et le popping créés dans les
            années 1970 et popularisés par les dance crews aux États-Unis.
          </Text>
          <Card>
            <Card.Title style={styles.title}>Débutant</Card.Title>
            <Card.Divider />
            <Text style={styles.description}>
              Dans le cours débutant vous apprendrez les bases pour commencer et
              comprendre la danse Hip-Hop.
            </Text>
            <Card.Image source={require("../images/Beginner.jpeg")} />
            <Button
              color={colors.primary}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Commencer le cours débutant"
            />
          </Card>
          <Card>
            <Card.Title style={styles.title}>Intermediaire</Card.Title>
            <Card.Divider />
            <Text style={styles.description}>
              Dans le cours intermediaire vous allez apprendre de nombreux step
              fondametal du Hip-Hop.
            </Text>
            <Card.Image source={require("../images/advanced.jpeg")} />
            <Button
              color={colors.primary}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Commencer le cours intermediaire"
            />
          </Card>
          <Card>
            <Card.Title style={styles.title}>Avancé</Card.Title>
            <Card.Divider />
            <Text style={styles.description}>
              Dans le cours avancé vous allez apprendre freestyler avec les
              bases du Hip-Hop.
            </Text>
            <Card.Image source={require("../images/Intermediate.jpeg")} />
            <Button
              color={colors.primary}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: colors.primary,
              }}
              title="Commencer le cours avancé"
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

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
});
