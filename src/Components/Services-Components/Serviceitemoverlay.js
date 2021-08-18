import React from "react"
import check from "../../../static/images/Assets/icons/check_bold.png"
import bags from "../../../static/images/bags.png"
import Foreachservice from "./Foreachservice"
import { graphql, useStaticQuery } from "gatsby"
const Serviceitemoverlay = props => {
  console.log("hhmm" + props.state)

  const data = useStaticQuery(graphql`
    query test {
      allDataServicesJson {
        nodes {
          tittleprincipal
          id
          content {
            desc
            tittle
            services {
              first_column
              second_column
            }
          }
        }
      }
    }
  `)
  const dataoverlay = props.currentdata
  let AlldataCategory = data.allDataServicesJson
  console.log("currentdata")
  console.log(props.currentdata)
  AlldataCategory = AlldataCategory.nodes.filter(
    result => result.tittleprincipal === dataoverlay
  )[0]

  console.log("jos")

  console.log("sus")
  if (!AlldataCategory) {
    return null
  } else {
    return (
      <div className="parentovertest">
        <div className="overtest">
          <div className="exit" onClick={() => props.HandlerProp(false)}>
            x
          </div>
          <div className="relativetest">
            <div className="flextestst">
              <div className="Photo">
                <img src={props.imageoverlayprop} />
              </div>
              <div className="textx">
                <div className="DescriptionT">
                  <h1>{AlldataCategory.content.tittle}</h1>
                  <p>{AlldataCategory.content.desc}</p>
                </div>

                <div className="checkDo">
                  <div className="firstrow">
                    {AlldataCategory.content.services.first_column.map(
                      result => (
                        <Foreachservice
                          id={result}
                          textitem={result}
                          check={check}
                        />
                      )
                    )}
                  </div>
                  <div className="second">
                    {AlldataCategory.content.services.second_column.map(
                      result => (
                        <Foreachservice
                          id={result}
                          textitem={result}
                          check={check}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="photoss">
              <div className="photoelement"></div>
              <div className="photoelement"></div>
              <div className="photoelement"></div>
              <div className="photoelement"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Serviceitemoverlay
