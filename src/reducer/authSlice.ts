import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	email: string
	password: string
	showPassword: boolean
	isEmailFocused: boolean
	isPasswordFocused: boolean
	emailError: string
	passwordError: string
	accessToken: string | null
}

const initialState: AuthState = {
	email: '',
	password: '',
	showPassword: false,
	isEmailFocused: false,
	isPasswordFocused: false,
	emailError: '',
	passwordError: '',
	accessToken: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
		toggleShowPassword: state => {
			state.showPassword = !state.showPassword
		},
		setEmailFocused: (state, action: PayloadAction<boolean>) => {
			state.isEmailFocused = action.payload
		},
		setPasswordFocused: (state, action: PayloadAction<boolean>) => {
			state.isPasswordFocused = action.payload
		},
		resetForm: () => {
			return initialState
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload
		},
		logout: state => {
			state.accessToken = null
		},
	},
})

export const {
	setEmail,
	setPassword,
	toggleShowPassword,
	setEmailFocused,
	setPasswordFocused,
	setAccessToken,
	resetForm,
	logout,
} = authSlice.actions

export default authSlice.reducer
