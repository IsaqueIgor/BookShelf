import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'montserrat-regular',
    color: '#121212',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 36,
    marginLeft: 37,
  },
  optionsContainer: {
    width: '90%',
    marginTop: 41,
    marginLeft: 37,
    flexDirection: 'column',
  },
  optionRow: {
    height: 32,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 24,
  },
  optionName: {
    fontFamily: 'montserrat-regular',
    color: '#121212',
    fontSize: 24,
  },
  line: {
    marginBottom: 20,
    height: 1,
    marginRight: 24,
    backgroundColor: '#DCDCDC',
  },
});

export default styles;
