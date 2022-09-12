import { useEffect, useState } from 'react'
import axios from 'axios'

 const useFetch = (url, deps = []) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url, deps])

  return { data, error, loading }
}

export default useFetch