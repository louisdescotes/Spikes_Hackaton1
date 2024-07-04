import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Landing from './layout/Landing'
import Cards from './layout/Cards'
import Features from './layout/Features'
import NewLetters from './layout/NewLetters'

const App = () => {
  return (
    <body>
      <Header />
      <Landing />
      <Cards />
      <Features />
      <NewLetters />
      <Footer />
    </body>
  )
}

export default App