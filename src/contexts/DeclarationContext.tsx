import { FC, createContext, useState, useContext, useCallback } from 'react'

const setReusableData = (data: PersonalData) => {
  localStorage.setItem(
    '_data',
    JSON.stringify({
      fullName: data.fullName,
      address: data.address,
      personalNumber: data.personalNumber,
    }),
  )
}

const getReusableData = (): PersonalData | undefined => {
  const data = localStorage.getItem('_data')
  if (data) return JSON.parse(data)
}

interface PersonalData {
  fullName: string
  address: string
  personalNumber: string
}

const INITIAL_DATA: PersonalData = {
  fullName: '',
  address: '',
  personalNumber: '',
}

export interface IDeclaration {
  fullName: string
  address: string
  personalNumber: string
  transactions: {
    date?: Date
    amount?: number
  }[]
}

export const INITIAL_DECLARATION: IDeclaration = {
  ...(getReusableData() || INITIAL_DATA),
  transactions: [{ date: undefined, amount: undefined }],
}

const DeclarationContext = createContext<[IDeclaration, null | ((data: IDeclaration) => void)]>([
  INITIAL_DECLARATION,
  null,
])

type DeclarationProviderProps = {
  children?: React.ReactNode
}

export const DeclarationProvider: FC<DeclarationProviderProps> = ({ children }) => {
  const [declaration, setDeclaration] = useState(INITIAL_DECLARATION)

  const handleUpdate = useCallback((data: IDeclaration) => {
    setReusableData(data)
    setDeclaration(data)
  }, [])

  return (
    <DeclarationContext.Provider value={[declaration, handleUpdate]}>
      {children}
    </DeclarationContext.Provider>
  )
}

export const useDeclaration = () => {
  return useContext(DeclarationContext)
}
