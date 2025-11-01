import clsx from "clsx"

//styles
//--------------------------------------------------------------------//

const headlineStyles = clsx(
  'font-bold',
  'text-4xl',
  'md:text-4xl',
  'lg:text-5xl',
  'text-center',
  'mb-6',
  'bg-gradient-to-r',
  'from-green-500',
  'to-blue-600',
  'bg-clip-text',
  'text-transparent',
);

//--------------------------------------------------------------------//

export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto mt-10">
      <h2 className={headlineStyles}>Contact Me</h2>
      <div className="inset-0 bg-gray-300 absolute">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61775.91916614914!2d120.90154335355133!3d14.599363585126248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1761988237795!5m2!1sen!2sus"
          style={{
            filter: 'grayscale(1)',
            border: 0
          }}
        >
        </iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  )
}
