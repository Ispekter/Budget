export const fetchData = (key) => {
  return localStorage.getItem(key)
}

export const postData = (key, value) => {
	return localStorage.setItem(key, value)
}