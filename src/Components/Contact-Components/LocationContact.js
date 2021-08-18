import React, { useState } from "react"
import locationimage from "../../../static/images/Assets/icons/location.png"
import phone from "../../../static/images/Assets/icons/phone.png"

const LocationContact = () => {
  const [current, setcurrent] = useState([])

  const first =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55192.044144104344!2d-81.75755022130727!3d30.165629213616178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8ccc88f38e6cdd7!2sGus%20And%20Company%20Shoe%20and%20Luggage%20Repair!5e0!3m2!1ses!2ses!4v1607874598572!5m2!1ses!2ses"
  const second =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55100.71514738954!2d-81.69612292089849!3d30.328356999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b7178f6eb3f1%3A0x8fbd0ef07d96e6f6!2sGus%20%26%20Co%20Shoe%20%26%20Luggage%20Repair!5e0!3m2!1ses!2ses!4v1607877957157!5m2!1ses!2ses"
  const [CurrentMap, setCurrentMap] = useState(first)
  const showLocation = event => {
    setcurrent(event.target.id)
    console.log("nothing")
    console.log(current)
    if (CurrentMap === first) {
      setCurrentMap(second)
    } else {
      setCurrentMap(first)
    }
    console.log(event.target.id)
  }

  return (
    <div className="center-section ">
      <div className="LocationFlex margintop">
        <div className="map">
          <iframe
            src={CurrentMap}
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0, borderRadius: 26 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="adresses">
          <div
            className="adress-item"
            onClick={showLocation}
            id="firstLocation"
          >
            <div className="numberLocation">1</div>

            <div className="Location inlineAdress">
              <div className="iconLocation">
                <img src={locationimage} />
              </div>
              <div className="adresst">
                228 W Adams Street Jacksonville, FL 32202
              </div>
            </div>
            <div className="Location inlineAdress">
              <div className="iconLocation">
                <img src={phone} />
              </div>
              <div className="adresst">(3333) 555-555</div>
            </div>
          </div>
          <div
            className="adress-item"
            onClick={showLocation}
            id="secondLocation"
          >
            <div className="numberLocation">2</div>
            <div className="Location inlineAdress">
              <div className="iconLocation">
                <img src={locationimage} />
              </div>
              <div className="adresst">1871 Wells Road Orange Park, FL</div>
            </div>
            <div className="Location inlineAdress">
              <div className="iconLocation">
                <img src={phone} />
              </div>
              <div className="adresst">(3333) 555-555</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationContact
