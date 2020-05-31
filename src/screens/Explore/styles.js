import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 50,
    padding: (0, 16),
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputSearchContainer: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
  },
  inputSearch: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    flex: 1,
  },
  buttonSearch: {
    shadowColor: '#222',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 12,
    padding: 13,
    borderRadius: 30,
    aspectRatio: 1,
  },
});

export default styles;
