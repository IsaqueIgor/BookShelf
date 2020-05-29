import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    padding: (0, 16, 0, 0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 25,
    marginRight: 10,
    padding: 15,
  },
  moreText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  surface: {
    elevation: 15,
    height: 150,
    width: 100,
    marginRight: 10,
    marginLeft: 15,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    height: 250,
    width: 120,
    paddingRight: 10,
  },
  bookImg: {
    alignContent: 'center',
    height: 150,
    width: 100,
    borderRadius: 10,
    padding: 10,
  },
  bookTitle: {
    alignContent: 'center',
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 12,
  },
});

export default styles;
