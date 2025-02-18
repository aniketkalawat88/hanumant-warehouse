import React from 'react'

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-6">
    <div className="bg-white shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Send us a quick message</h2>
      <form
        action="#"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        method="POST"
      >
        <div>
          <label className="block text-gray-600" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2"
            id="first-name"
            name="first-name"
            placeholder="First Name *"
            required=""
            type="text"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2"
            id="last-name"
            name="last-name"
            placeholder="Last Name *"
            required=""
            type="text"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2"
            id="email"
            name="email"
            placeholder="abc@abc.com *"
            required=""
            type="email"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2"
            id="phone"
            name="phone"
            placeholder="0XXXX XXXXX"
            required=""
            type="tel"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-600" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 resize-none"
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            defaultValue={""}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <button
            className="bg-primary-main text-white px-6 py-2 rounded"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default ContactForm