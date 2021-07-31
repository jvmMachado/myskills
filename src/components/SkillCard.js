/* eslint-disable prettier/prettier */
import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.skillButton}>
        <Text style={styles.skillText}>
          {skill}
        </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    alignItems: 'center',
    padding: 15,
    marginBottom: 30,
  },
  skillText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
