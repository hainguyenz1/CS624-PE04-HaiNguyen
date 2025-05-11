import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';

const userImage = require('../../assets/images/user.png');

// Array of 6 unique team members
const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a skilled JavaScript developer who enjoys building intuitive mobile interfaces with React Native.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Alice',
    occupation: 'UI/UX Designer',
    description: 'Alice designs sleek and user-friendly app interfaces that enhance user experience and accessibility.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Hai',
    occupation: 'Backend Engineer',
    description: 'Hai focuses on building fast and secure APIs that power scalable mobile applications.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Lee',
    occupation: 'Project Manager',
    description: 'Lee coordinates mobile development projects, ensuring timely delivery and clear communication.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Kim',
    occupation: 'QA Tester',
    description: 'Kim identifies issues and ensures mobile apps are bug-free through rigorous manual and automated testing.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Emma',
    occupation: 'DevOps Specialist',
    description: 'Emma sets up CI/CD pipelines and manages cloud deployment for React Native apps.',
    showThumbnail: true,
  },
];

// Reusable ProfileCard component
const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  const containerStyles = [styles.cardContainer];
  if (showThumbnail) containerStyles.push(styles.cardThumbnail); // scale when thumbnail

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { data };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } },
      }),
    });
  };

  render() {
    const list = this.state.data.map((item, index) => (
      <ProfileCard
        key={'card-' + index}
        image={item.image}
        name={item.name}
        occupation={item.occupation}
        description={item.description}
        onPress={() => this.handleProfileCardPress(index)}
        showThumbnail={item.showThumbnail}
      />
    ));

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {list}
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardThumbnail: {
    transform: [{ scale: 0.4 }], // Thumbnail scaling
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: { height: 5, width: 5 },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginHorizontal: 40,
    marginBottom: 10,
  },
});
