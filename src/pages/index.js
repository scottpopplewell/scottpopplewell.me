import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        alt="homepage"
        src="../images/homepage.jpg"
      />
      <div className="homepage-div">
      <p>I'm <span className="bold-emphasis">Scott Popplewell</span>, an American developer</p>
      <p>I live and garden in Plano, Texas with my wife, Kathryn Shinn</p>
      <p>This site showcases my blog and hobbies</p>
      </div>
   </Layout>
  )
}
export default IndexPage
