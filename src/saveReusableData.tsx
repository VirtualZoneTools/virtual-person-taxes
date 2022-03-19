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

export function getReusableData() {
  return {
    fullName: localStorage.getItem('fullName') || '',
    address: localStorage.getItem('address') || '',
    personalNumber: localStorage.getItem('personalNumber') || '',
  }
}

export function clearReusableData() {
  localStorage.clear()
}
