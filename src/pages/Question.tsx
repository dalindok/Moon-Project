import React from 'react'
import Nav from '../components/question/Nav'
import Hero from '../components/question/Hero'
import Search from '../components/question/Search'
import All_Q from '../components/question/All_Q'
import PostCard from '../components/question/PostCard'
import Footer from '../components/question/Footer'
const Question = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Search/>
        <All_Q/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <Footer/>
    </div>
  )
}

export default Question