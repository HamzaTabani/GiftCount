import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import themes from '../assets/themes';
import fonts from '../assets/fonts';

const RestaurantCard = ({ onPress, name, discount, validity, image, hour, type }) => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          source={image}
          style={styles.imageStyle}
          borderRadius={12}
        />
        {discount ? (
          <View style={styles.discountStyle}>
            <Text style={styles.discountText}>{discount}</Text>
            <Text style={styles.discountText}>Discount</Text>
          </View>
        ) : null}
      </View>
      {type === 'scanned' &&
        <Text style={styles.typeText}>{'Exclusive Offer for You'}</Text>
      }
      <Text style={styles.name}>{name}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.validityText}>Validity</Text>
        <Text style={styles.dateText}>{validity}</Text>
      </View>
      {hour ? (
        <View style={styles.textWrapper}>
          <Text style={styles.validityText}>Hours</Text>
          <Text style={styles.dateText}>{hour}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  cardStyle: {
    marginBottom: hp('7'),
    // alignSelf: 'center'
  },
  imageStyle: {
    height: hp('20%'),
    width: '95%',
  },
  discountStyle: {
    backgroundColor: themes.red,
    position: 'absolute',
    right: 32,
    bottom: hp('1%') - hp('3.5%'),
    marginBottom: hp('1%'),
    paddingVertical: hp('0.5%'),
    paddingHorizontal: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  discountText: {
    color: themes.white,
    marginBottom: hp('0.2%'),
    fontWeight: 'bold',
    fontFamily: fonts.bold,
    fontSize: hp('1.8%'),
  },
  wrapper: {
    position: 'relative',
  },
  name: {
    color: themes.white,
    fontSize: hp('2.8%'),
    marginTop: hp('3%'),
    fontWeight: 'bold',
    fontFamily: fonts.regular,
  },
  itemText: {
    color: themes.primary,
    fontSize: hp(2),
    marginTop: hp('0.8%'),
    fontFamily: fonts.regular,
  },
  textWrapper: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    paddingTop: hp('1%'),
  },
  ratingText: {
    color: themes.primary,
    marginRight: hp('0.7%'),
    fontWeight: 'bold',
  },
  validityText: {
    color: themes.white,
    fontWeight: 'bold',
  },
  dateText: {
    color: themes.primary,
    fontSize: hp('1.8%'),
  },
  typeText: {
    color: themes.primary,
    fontWeight: 'bold',
    marginTop: hp(2),
    fontSize: hp(2),
  }
});
