import React from "react"
import Layout from "../Components/layout"
import LocationContact from "../Components/Contact-Components/LocationContact"
import ContactForm from "../Components/Contact-Components/ContactForm"
const Contact = () => {
  return (
    <Layout>
      <LocationContact />
      <ContactForm />
    </Layout>
  )
}
export default Contact
