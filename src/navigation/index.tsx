import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { supabase } from '../service/supabase'
import type { Session } from '@supabase/supabase-js'

// theme
import { useThemeNavigation } from '../hooks/colorScheme'

// import component `StackNavigation`
import StackNavigation from './StackNavigation'

export default function NavigationApp() {
	const [session, setSession] = useState<Session | null>(null)
	const themeNavigation = useThemeNavigation()

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])

	return (
		<NavigationContainer theme={themeNavigation}>
			<StackNavigation session={session} />
		</NavigationContainer>
	)
}
