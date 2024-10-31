import {
	GoogleSignin,
	isErrorWithCode,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-google-signin/google-signin'
import { supabase } from '../../service/supabase'
import Config from 'react-native-config' // Para usar '.env'

export default function () {
	GoogleSignin.configure({
		webClientId: Config.WEB_CLIENT_ID as string,
		scopes: ['https://www.googleapis.com/auth/drive.readonly'],
		forceCodeForRefreshToken: true,
	})

	const signIn = async () => {
		try {
			await GoogleSignin.hasPlayServices()
			const userInfo = await GoogleSignin.signIn()

			if (userInfo.data?.idToken) {
				await supabase.auth.signInWithIdToken({
					provider: 'google',
					token: userInfo.data.idToken,
				})
			} else {
				throw new Error('no ID token present!')
			}
		} catch (error) {
			if (isErrorWithCode(error)) {
				switch (error.code) {
					case statusCodes.SIGN_IN_CANCELLED:
						console.log({ 'El usuario canceló la operación': error })
						break
					case statusCodes.IN_PROGRESS:
						console.log({ 'Operación (por ejemplo, Iniciar sesión) en progreso': error })
						break
					case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
						console.log({ 'Servicios disponibles o obsoletos': error })
						break
					default:
						console.log({ 'Error desconocido': error })
				}
			} else {
				console.log({ 'Error no relacionado con el inicio de Google': error })
			}
		}
	}

	return (
		<GoogleSigninButton
			size={GoogleSigninButton.Size.Wide}
			color={GoogleSigninButton.Color.Dark}
			onPress={signIn}
		/>
	)
}
