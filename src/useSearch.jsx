import React from 'react'
import { useEffect,useState } from 'react'
import axios, { isCancel } from 'axios'

export default function useSearch(query,pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [book, setBook] = useState([])
    const [hasMore, setHasMore] = useState(false)
  
    useEffect(() => {
      setBook([])
    }, [query])
  
    useEffect(() => {
      setLoading(true)
      setError(false)
      let cancel
      axios({
        method: 'GET',
        url: 'http://openlibrary.org/search.json',
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setBook(() => {
          return [...new Set([ ...res.data.docs.map(b => b.title)])]
        })
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
      return () => cancel()
    }, [query, pageNumber])
  
    return { loading, error, book, hasMore }
  }