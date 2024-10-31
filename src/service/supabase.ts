import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import Config from 'react-native-config' // for use '.env'

const supabaseUrl = Config.SUPABASE_URL as string
const supabaseAnonKey = Config.SUPABASE_ANON_KEY as string

// NOTE: en createClient ver si es posible mandarle los tipos de la base de datos
// de supabase como creaeClient<Database>(...)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
})

AppState.addEventListener('change', (state) => {
	if (state === 'active') {
		supabase.auth.startAutoRefresh()
	} else {
		supabase.auth.stopAutoRefresh()
	}
})

export const SignOut = async () => {
	await supabase.auth.signOut()
}
