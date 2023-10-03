import { createContext, useState } from 'react';

type FormContextProps ={
    loading: boolean,
    error: string,
    handleState: () => void
}

type ProviderProps = {
    children: React.ReactNode
}

export const FormContext = createContext<FormContextProps>({
    loading: false,
    error: '',
    handleState: () => {}
})

export const FormProvider = ({children}: ProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const handleState = () => {
        setLoading(false)
        setError('')
    }
    return (
        <FormContext.Provider value={{loading, error,handleState}}>
            {children}
        </FormContext.Provider>
    )
}