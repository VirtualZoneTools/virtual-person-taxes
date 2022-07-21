export interface FormState {
  fullName: string
  address: string
  personalNumber: string
  transactions: {
    date?: Date
    amount?: number
  }[]
}

const INITIAL_DATA = {
  fullName: '',
  address: '',
  personalNumber: '',
}

export const INITIAL_STATE: FormState = {
  ...(getReusableData() || INITIAL_DATA),
  transactions: [{ date: undefined, amount: undefined }],
}

interface StateData {
  fullName: string
  address: string
  personalNumber: string
}

export function setReusableData(data: StateData) {
  localStorage.setItem(
    '_data',
    JSON.stringify({
      fullName: data.fullName,
      address: data.address,
      personalNumber: data.personalNumber,
    }),
  )
}

export function getReusableData(): StateData | undefined {
  const data = localStorage.getItem('_data')
  if (data) return JSON.parse(data)
}

export function clearReusableData() {
  localStorage.clear()
}
