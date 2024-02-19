import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebaseConfig";
import { onValue, ref, set } from "firebase/database";
import { CTAButton } from "../components/CTAButton";

interface Session {
  id: string;
  date: number;
}

const MAX_SESSIONS = 5;

const Home: React.FC = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;
  const database = FIREBASE_DB;
  const sessionId = Date.now();
  const databaseRef = ref(database, `/users/${userId}/sessions/${sessionId}`);

  const skernaLyoum = async () => {
    const dateObject = new Date(sessionId);
    console.log(dateObject);
    await set(databaseRef, { date: sessionId });
  };

  const databasePath = ref(database, `/users/${userId}/sessions`);
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(databasePath, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const typedData: Record<string, { date: number }> = data;
        const sessionsArray: Session[] = Object.entries(typedData).map(
          ([key, value]) => ({
            id: key,
            date: value.date,
          })
        );

        // Sort sessions in descending order (newer to older)
        sessionsArray.sort((a, b) => b.date - a.date);

        // Keep only the latest 5 sessions
        const latestSessions = sessionsArray.slice(0, MAX_SESSIONS);
        setSessions(latestSessions);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [databaseRef]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Wakteh Skert!!</Text>
        <ScrollView>
          {sessions.map((session) => (
            <View key={session.id} style={styles.sessionContainer}>
              <Text style={styles.dateText}>
                {new Date(session.date).toLocaleDateString()} :
                {new Date(session.date).toLocaleTimeString()}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.button}>
        <CTAButton
          title="Lyoum Skert"
          onPress={skernaLyoum}
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
  sessionContainer: {
    marginBottom: 10,
    padding: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Home;
