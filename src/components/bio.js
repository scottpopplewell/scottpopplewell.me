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
    <div className="bio">
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
        <div className="bio-social-row">
          <a href={`https://github.com/${social?.github}`}>
            <StaticImage
              className="bio-social"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/github.png"
              width={20}
              height={20}
              quality={95}
              alt="Github"
            /> 
          </a>
          <a href={`https://twitter.com/${social?.twitter}`}>
            <StaticImage
              className="bio-social"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/twitter.png"
              width={20}
              height={20}
              quality={95}
              alt="Twitter"
            /> 
          </a>
        </div>
        <a className="bio-resume" href={`./resume.html`}>Resume</a>
    </div>
  )
}

export default Bio
