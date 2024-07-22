import React from 'react'
import Header from './components/Header/Header'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'

const Blog = () => {
  return (
    <div className='bg-dark'>
        <Helmet>
        <title>Into Words - Blog</title>
      </Helmet>
        <Header />
        <div className='beg'> <br />
                <h2>Blog</h2>
                <h5 className=''>Greeting Cards</h5>
            </div>
        <Footer />
    </div>
  )
}

export default Blog