/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="table">
        <div className="bio-row">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.jpg"
              width={100}
              height={100}
              quality={95}
              alt="Profile picture"
            />
            <div className="bio-content">
              Welcome, I'm Scott!<br/>
              These are just some musings<br/>
              See my <a href={`./resume.html`}>resume</a>, <a rel="me" href="https://fosstodon.org/@Sdpopp">Mastodon</a> or <a href={`https://github.com/${social?.github}`}>github</a>.
              </div>
        </div>
    </div>
  )
}

export default Bio
