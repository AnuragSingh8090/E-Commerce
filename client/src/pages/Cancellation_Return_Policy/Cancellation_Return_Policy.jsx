import React, { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./Cancellation_Return_Policy.css";

const Cancellation_Return_Policy = () => {
  const [expandedSections, setExpandedSections] = useState({
    1: true, 2: true, 3: true, 4: true, 5: true
  });

  const toggleSection = (sectionNumber) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionNumber]: !prev[sectionNumber],
    }));
  };

  return (
    <div className="max-w-[1000px] mx-auto my-10 px-5 font-['IBM_Plex_Sans'] text-[#333]">
      <ScrollToTop />
      <div className="text-center mb-10 pb-5 border-b border-[var(--border-light)]">
        <h1 className="text-[var(--primary)] text-3xl md:text-4xl mb-2">Cancellation & Return Policy</h1>
        <p className="text-gray-600 text-sm">Last Updated: July 1, 2023</p>
      </div>

      <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
        <section className="mb-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(1)}
          >
            <h2 className="text-[var(--primary)] text-base font-medium mb-4 pb-2 border-b border-[var(--primary-light)] flex-grow">
              1. Cancellation Policy
            </h2>
            <span className="text-[var(--primary)] ml-4 flex items-center justify-center h-8 w-6">
              <i className={`fa-solid ${expandedSections[1] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </span>
          </div>
          {expandedSections[1] && (
            <div className="animate-fadeIn">
              <p className="mb-4 leading-relaxed text-sm">
                At BazaarWale, we understand that you may need to cancel your order. Please review our cancellation policy:
              </p>
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Order Cancellation Before Shipping</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">You can cancel your order at any time before it has been shipped.</li>
                <li className="leading-relaxed">To cancel an order, log in to your account, go to order history, and select the cancel option.</li>
                <li className="leading-relaxed">Alternatively, you can contact our customer service team via email or phone.</li>
                <li className="leading-relaxed">Once your cancellation request is received, we will process it within 24 hours.</li>
                <li className="leading-relaxed">If payment has already been made, the refund will be processed according to our refund policy.</li>
              </ul>
              
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Order Cancellation After Shipping</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Orders that have already been shipped cannot be cancelled directly.</li>
                <li className="leading-relaxed">In such cases, you will need to refuse the delivery or follow our return policy.</li>
                <li className="leading-relaxed">Shipping charges are non-refundable if the order has already been shipped.</li>
              </ul>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(2)}
          >
            <h2 className="text-[var(--primary)] text-base font-medium mb-4 pb-2 border-b border-[var(--primary-light)] flex-grow">
              2. Return Policy
            </h2>
            <span className="text-[var(--primary)] ml-4 flex items-center justify-center h-8 w-6">
              <i className={`fa-solid ${expandedSections[2] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </span>
          </div>
          {expandedSections[2] && (
            <div className="animate-fadeIn">
              <p className="mb-4 leading-relaxed text-sm">
                We strive to ensure you're completely satisfied with your purchase. If you're not, you may be eligible to return the product:
              </p>
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Return Eligibility</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Returns are accepted within 30 days of delivery.</li>
                <li className="leading-relaxed">Products must be in their original condition, unused, unwashed, and with all tags attached.</li>
                <li className="leading-relaxed">Original packaging must be intact and included with the return.</li>
                <li className="leading-relaxed">Certain products cannot be returned due to hygiene reasons, including undergarments, swimwear, and personal care items.</li>
                <li className="leading-relaxed">Products marked as "non-returnable" on the product page cannot be returned.</li>
              </ul>
              
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">How to Return</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Log in to your account and visit the order history section.</li>
                <li className="leading-relaxed">Select the order and item(s) you wish to return.</li>
                <li className="leading-relaxed">Choose a reason for the return from the dropdown menu.</li>
                <li className="leading-relaxed">Follow the instructions to generate a return shipping label.</li>
                <li className="leading-relaxed">Package the item securely and attach the return shipping label.</li>
                <li className="leading-relaxed">Drop off the package at the nearest authorized courier center.</li>
              </ul>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(3)}
          >
            <h2 className="text-[var(--primary)] text-base font-medium mb-4 pb-2 border-b border-[var(--primary-light)] flex-grow">
              3. Refund Policy
            </h2>
            <span className="text-[var(--primary)] ml-4 flex items-center justify-center h-8 w-6">
              <i className={`fa-solid ${expandedSections[3] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </span>
          </div>
          {expandedSections[3] && (
            <div className="animate-fadeIn">
              <p className="mb-4 leading-relaxed text-sm">
                Once we receive your returned item, our team will inspect it and process your refund:
              </p>
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Refund Process</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Refunds are processed within 5-7 business days after we receive and inspect the returned item.</li>
                <li className="leading-relaxed">The refund will be credited back to the original payment method used for the purchase.</li>
                <li className="leading-relaxed">If you chose Cash on Delivery, the refund will be processed to your BazaarWale wallet or bank account.</li>
                <li className="leading-relaxed">A confirmation email will be sent once your refund has been processed.</li>
              </ul>
              
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Refundable Amount</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">The product price is fully refundable if the return meets all eligibility criteria.</li>
                <li className="leading-relaxed">Original shipping charges are non-refundable unless the return is due to our error.</li>
                <li className="leading-relaxed">Return shipping costs are typically borne by the customer, except in cases of damaged or incorrect items.</li>
                <li className="leading-relaxed">For returns due to product defects or incorrect items shipped, we will refund the full amount including shipping charges.</li>
              </ul>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(4)}
          >
            <h2 className="text-[var(--primary)] text-base font-medium mb-4 pb-2 border-b border-[var(--primary-light)] flex-grow">
              4. Replacement Policy
            </h2>
            <span className="text-[var(--primary)] ml-4 flex items-center justify-center h-8 w-6">
              <i className={`fa-solid ${expandedSections[4] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </span>
          </div>
          {expandedSections[4] && (
            <div className="animate-fadeIn">
              <p className="mb-4 leading-relaxed text-sm">
                If you receive a damaged or defective product, you may request a replacement:
              </p>
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Replacement Eligibility</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Replacements are available for damaged, defective, or incorrect items.</li>
                <li className="leading-relaxed">Replacement requests must be made within 7 days of delivery.</li>
                <li className="leading-relaxed">You may be required to provide photos of the damaged or defective product.</li>
                <li className="leading-relaxed">Replacements are subject to product availability.</li>
              </ul>
              
              <h3 className="text-[var(--primary)] text-sm font-medium mb-2">Replacement Process</h3>
              <ul className="mb-4 pl-5 space-y-2.5 text-sm">
                <li className="leading-relaxed">Log in to your account and visit the order history section.</li>
                <li className="leading-relaxed">Select the order and item(s) for which you want a replacement.</li>
                <li className="leading-relaxed">Choose "Replacement" as your preferred resolution.</li>
                <li className="leading-relaxed">Provide details about the issue with the product.</li>
                <li className="leading-relaxed">Our team will review your request and initiate the replacement process if approved.</li>
                <li className="leading-relaxed">You will receive a confirmation email with details about your replacement.</li>
              </ul>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(5)}
          >
            <h2 className="text-[var(--primary)] text-base font-medium mb-4 pb-2 border-b border-[var(--primary-light)] flex-grow">
              5. Contact Information
            </h2>
            <span className="text-[var(--primary)] ml-4 flex items-center justify-center h-8 w-6">
              <i className={`fa-solid ${expandedSections[5] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </span>
          </div>
          {expandedSections[5] && (
            <div className="animate-fadeIn">
              <p className="mb-4 leading-relaxed text-sm">
                If you have any questions or concerns about our cancellation and return policies, please contact us:
              </p>
              <div className="bg-[var(--primary-light)] p-5 rounded-lg">
                <p className="flex items-center mb-2 text-sm">
                  <i className="fa-solid fa-envelope text-[var(--primary)] mr-3"></i>
                  <span>Email: returns@bazaarwale.com</span>
                </p>
                <p className="flex items-center mb-2 text-sm">
                  <i className="fa-solid fa-phone text-[var(--primary)] mr-3"></i>
                  <span>Phone: +91-1234567890 (9 AM to 6 PM, Monday to Saturday)</span>
                </p>
                <p className="flex items-center text-sm">
                  <i className="fa-solid fa-location-dot text-[var(--primary)] mr-3"></i>
                  <span>Address: BazaarWale Returns Department, 123 E-Commerce Street, Digital City, India - 110001</span>
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cancellation_Return_Policy; 