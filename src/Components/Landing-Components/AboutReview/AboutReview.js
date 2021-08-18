import React, { useState, useEffect } from "react"
import AboutReviewItem from "./AboutReviewItem"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const AboutReview = () => {
  console.log("     ABOUT REVIEW     ")
  const [selectedContent, setselectedContent] = useState("review1")
  const [indexselected, setindexselected] = useState("1")
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulLandingPageReviews {
        totalCount
        nodes {
          review1 {
            id
            reviewText
            afterImageReview {
              fluid {
                src
              }
            }
            beforeImageReview {
              fluid(maxWidth: 1800) {
                ...GatsbyContentfulFluid
              }
            }
          }
          review2 {
            id
            reviewText
            afterImageReview {
              fluid {
                src
              }
            }
            beforeImageReview {
              fluid {
                src
              }
            }
          }
          review3 {
            id
            reviewText
            afterImageReview {
              fluid {
                src
              }
            }
            beforeImageReview {
              fluid {
                src
              }
            }
          }
          review4 {
            id
            reviewText
            afterImageReview {
              fluid {
                src
              }
            }
            beforeImageReview {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  //CALL BACK

  const buttonslideleft = () => {}
  //console.log(data.allContentfulLandingPageReviews.nodes[0]["review1"])

  const [selectedContentdata, setselectedContentdata] = useState(
    data.allContentfulLandingPageReviews.nodes[0][selectedContent]
  )
  const variable = "review2"
  const ToggleButtonReview = elem => {
    //GET CURENT postIndex from the element clicked
    const postindexvar = elem.target.getAttribute("postindex")

    const filteredData =
      data.allContentfulLandingPageReviews.nodes[0][postindexvar]

    setselectedContentdata(filteredData)
    setindexselected(postindexvar.slice(-1))
  }
  const handler = data2 => {
    let indexfinalposition = parseInt(indexselected) + 1
    let test1 = "review" + indexfinalposition
    console.log(test1)
    const filteredData2 = data.allContentfulLandingPageReviews.nodes[0][test1]
    console.log(filteredData2)
    console.log("indexfinalposition " + indexfinalposition)
    setindexselected(indexfinalposition)
    setselectedContent(filteredData2)

    console.log("review" + indexfinalposition)
  }

  // console.log(data.allContentfulLandingPageReviews.nodes[0][variable])

  return (
    <div className="center-section paddingSpacebetwen flextest1">
      <div className="AboutReview-section">
        <h1>Our clients reviews</h1>
        <AboutReviewItem datapassed={selectedContentdata} leftindex={handler} />
        <div className="AboutReview-Buttons">
          <div
            className="buttonReview"
            postindex="review1"
            onClick={elem => ToggleButtonReview(elem)}
          >
            Shoes for men
          </div>
          <div
            className="buttonReview"
            postindex="review2"
            onClick={elem => ToggleButtonReview(elem)}
          >
            Shoes for ladies
          </div>
          <div
            className="buttonReview"
            postindex="review3"
            onClick={elem => ToggleButtonReview(elem)}
          >
            Luggage
          </div>
          <div
            className="buttonReview"
            postindex="review4"
            onClick={elem => ToggleButtonReview(elem)}
          >
            Bag
          </div>
          <div className="buttonReview buttonMore">More</div>
        </div>
      </div>
    </div>
  )
}

export default AboutReview
