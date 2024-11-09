import Nav from '../components/question/Nav'
import Hero from '../components/question/Hero'
import Search from '../components/question/Search'
import AllQ from '../components/question/All_Q'
import PostCard from '../components/question/PostCard'
import Footer from '../components/question/Footer'
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