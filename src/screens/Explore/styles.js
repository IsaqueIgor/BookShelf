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
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    height: 55,
    width: '90%',
    backgroundColor: '#EDEDED',
    borderRadius: 25,
    padding: 5,
    paddingRight: 10,
  },
});

export default styles;
