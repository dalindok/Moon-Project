import Nav from '../components/Nav'
import Hero from '../components/question/Hero'
import Search from '../components/question/Search'
import AllQ from '../components/question/AllQ'
import PostCard from '../components/question/PostCard'
import Footer from '../components/Footer'
import React from 'react'
const QuestionPage = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Search/>
        <AllQ/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <Footer/>
    </div>
  )
}

export default QuestionPage