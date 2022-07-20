export interface FormState {
  fullName: string
  address: string
  personalNumber: string
  transactions: {
    date?: Date
    amount?: number
  }[]
}

export const INITIAL_STATE: FormState = {
  ...getReusableData(),
  transactions: [{ date: undefined, amount: undefined }],
}

interface StateData {
  fullName: string
  address: string
  personalNumber: string
}

export function setReusableData({ fullName, address, personalNumber }: StateData) {
  if (getReusableData().fullName) return

  localStorage.setItem('fullName', fullName)
  localStorage.setItem('address', address)
  localStorage.setItem('personalNumber', personalNumber)
}

export function getReusableData(): StateData {
  return {
    fullName: localStorage.getItem('fullName') || '',
    address: localStorage.getItem('address') || '',
    personalNumber: localStorage.getItem('personalNumber') || '',
  }
}

export function clearReusableData() {
  localStorage.clear()
}
