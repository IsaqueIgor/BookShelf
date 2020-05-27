import React, {Component} from 'react';

console.disableYellowBox = true;

import TabNavigator from './src/components/BottomNav';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabNavigator />;
  }
}

export default App;
