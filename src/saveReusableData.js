function setReusableData({ fullName, address, personalNumber }) {
  if (getReusableData().fullName) return

  localStorage.setItem('fullName', fullName)
  localStorage.setItem('address', address)
  localStorage.setItem('personalNumber', personalNumber)
}

function getReusableData() {
  return {
    fullName: localStorage.getItem('fullName') || '',
    address: localStorage.getItem('address') || '',
    personalNumber: localStorage.getItem('personalNumber') || '',
  }
}

function clearReusableData() {
  localStorage.clear()
}

export { getReusableData, setReusableData, clearReusableData }
