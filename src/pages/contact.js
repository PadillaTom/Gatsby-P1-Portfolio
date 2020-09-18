import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/xdopnryk" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="your message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
