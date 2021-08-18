import React from "react"
import Layout from "../Components/layout"
import AboutTimeline from "../Components/Landing-Components/aboutTimeline"
import AboutStory from "../Components/Landing-Components/AboutStory"
import AboutStoryTop from "../Components/Landing-Components/AboutStoryTop"
import AboutServices from "../Components/Landing-Components/AboutServices"
import AboutReview from "../Components/Landing-Components/AboutReview/AboutReview"

const IndexPage = () => {
  return (
    <Layout>
      <AboutTimeline />
      <AboutServices />
      <AboutStoryTop />
      <AboutStory />
      <AboutReview />
    </Layout>
  )
}
export default IndexPage
