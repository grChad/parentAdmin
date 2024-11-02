import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import { store } from './src/store'
import { Provider } from 'react-redux'

import NavigationApp from './src/navigation'

const ReduxProvider = () => (
	<Provider store={store}>
		<NavigationApp />
	</Provider>
)

AppRegistry.registerComponent(appName, () => ReduxProvider)
