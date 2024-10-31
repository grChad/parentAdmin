import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import NavigationApp from './src/navigation'

AppRegistry.registerComponent(appName, () => NavigationApp)
