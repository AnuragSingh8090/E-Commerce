const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gray-100">
      <div className="bg-white p-[32px] rounded-[12px] shadow-md w-[400px]">
        {/* Page Title */}
        <h2 className="text-[24px] font-[600] text-gray-800 mb-[24px] text-center">
          Contact Us
        </h2>

        {/* Name Field */}
        <div className="mb-[20px]">
          <label
            htmlFor="name"
            className="block text-[14px] font-[500] text-gray-700 mb-[8px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email Field */}
        <div className="mb-[20px]">
          <label
            htmlFor="email"
            className="block text-[14px] font-[500] text-gray-700 mb-[8px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-[20px]">
          <label
            htmlFor="subject"
            className="block text-[14px] font-[500] text-gray-700 mb-[8px]"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Message Field */}
        <div className="mb-[24px]">
          <label
            htmlFor="message"
            className="block text-[14px] font-[500] text-gray-700 mb-[8px]"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white py-[12px] rounded-[8px] font-[500] text-[16px] hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
