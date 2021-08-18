import React from "react"

import facebook from "../../../static/images/Assets/icons/facebook.png"
import phone2 from "../../../static/images/Assets/icons/phone2.png"
import email from "../../../static/images/Assets/icons/mail.png"

const ContactForm = () => {
  return (
    <div className="center-section em70">
      <div className="ContactBox">
        <div className="ContactFormBox">
          <div className="ParagraphT">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <form action="submit" method="post">
            <div className="tests">
              <label htmlFor="fname">Your full Name:</label>
              <input
                type="text"
                id="fname"
                name="FullName"
                placeholder="Full name: "
                required
              />
            </div>
            <div className="tests">
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="example@email.com "
                required
              />
            </div>
            <div className="tests">
              <label htmlFor="subjectType">Subject:</label>
              <input
                type="text"
                id="subjectType"
                name="Subject"
                placeholder="Repair,boots, price, etc. "
                required
              />
            </div>
            <div className="tests">
              <label htmlFor="subjectType">Category:</label>
              <input
                type="text"
                id="subjectType"
                name="Subject"
                placeholder="Repair,boots, price, etc. "
                required
              />
            </div>
            <div className=" textarea">
              <label htmlFor="subjectext">Your message</label>
              <textarea
                id="subjectext"
                name="Message"
                placeholder="Write something.."
                required
              ></textarea>
            </div>
            <input
              type="submit"
              id="Sabutton"
              value="Send"
              className="button1"
            />
          </form>
        </div>
        <div className="InputContact">
          <div className="subInputContact">
            <div class="ContactInfo-Item">
              <div class="ContactIcon">
                <img src={facebook} />
              </div>
              <div class="ContactText">@facebook-id</div>
            </div>
            <div class="ContactInfo-Item">
              <div class="ContactIcon">
                <img src={phone2} />
              </div>
              <div class="ContactText">(3333) 555-555</div>
            </div>
            <div class="ContactInfo-Item">
              <div class="ContactIcon">
                <img src={email} />
              </div>
              <div class="ContactText">email@test.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
