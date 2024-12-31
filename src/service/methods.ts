import { supabase } from './supabase'
import type { DataQuiz } from './quiz'

export const getDatabase = async () => {
	try {
		const { data, error } = await supabase.from('quiz').select()
		if (error) {
			throw error
		}
		return data
	} catch {
		console.log('getDatabase error')
	}
}

export const createDatabase = async (data: DataQuiz) => {
	const { error } = await supabase.from('quiz').insert(data)
	if (error) {
		throw error
	}
}

export const updateDatabase = async (data: DataQuiz, id: string) => {
	const { error } = await supabase.from('quiz').update(data).eq('id', id)
	if (error) {
		throw error
	}
}

export const deleteDatabase = async (id: string) => {
	const response = await supabase.from('quiz').delete().eq('id', id)
	if (response.status !== 204) {
		throw new Error('Error al eliminar')
	}
}

export const deleteMultipleDatabase = async (ids: string[]) => {
	const response = await supabase.from('quiz').delete().in('id', ids)
	if (response.status !== 204) {
		throw new Error('Error al eliminar multiples elementos')
	}
}
