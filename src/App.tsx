import './App.css';
import { useEffect, useState, FC, ReactElement, FormEvent } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

const App: FC = (): ReactElement => {
  let [searchTerm, setSearchTerm] = useState<string>('')
  let [data, setData] = useState<any[]>([])
  let [message, setMessage] = useState<string>('Search for Music!')

  useEffect((): void => {
    if (searchTerm) {
      document.title = `${searchTerm} Music`
      const fetchData = async (): Promise<void> => {
        const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
        const resData = await response.json()
        if (resData.results.length > 0) {
          console.log(resData.results)
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [searchTerm])

  const handleSearch = (e: FormEvent, term: string): void => {
    e.preventDefault()
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;