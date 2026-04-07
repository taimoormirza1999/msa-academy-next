"use client";
import React from "react";

const PrivacyPolicyClient = () => {
  return (
    <div className="privacy-policy -mt-14">
      <div className="w-90 max-w-5xl font-eastroman-trial-bold p-6 lg:p-8 mt-28 mx-auto mb-5">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-primary">
          Privacy <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">Policy</span>
        </h1>
        <p className="text-gray-50">
          This Privacy Statement explains our practices, including your choices,
          regarding the collection, security, and use of your personal
          information in connection with the MSA-Academy service.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Contact Us
        </h2>
        <p className="text-gray-50">
          If you have general questions about your account or how to contact
          customer service for assistance and for questions specifically about
          this Privacy Statement, or our use of your personal information,
          cookies, or similar technologies, please contact our Data Protection
          Officer/Privacy Office at:
          <strong className="block text-pink200">contact@msa-club.com</strong>
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Collection of Information
        </h2>
        <p className="text-gray-50">
          We receive and store information about you such as:
        </p>
        <ul className="list-disc list-inside text-gray-50">
          <li>
            Your name, email address, payment method(s), and telephone number.
          </li>
          <li>
            Information you provide when using our service, interacting with
            customer support, or participating in surveys.
          </li>
          <li>
            Activity on the MSA-Academy service, such as search queries and
            shows watched.
          </li>
          <li>
            Your interactions with our emails, push notifications, and customer
            service.
          </li>
        </ul>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Security
        </h2>
        <p className="text-gray-50">
          MSA-Academy uses reasonable security measures to protect your personal
          information against unauthorized access, theft, and loss.
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Your Rights
        </h2>
        <p className="text-gray-50">
          You can request access to, correct, update, or delete your personal
          information by contacting:
          <strong className="block text-pink200">contact@msa-club.com</strong>
        </p>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Subscription Policy
        </h2>

        <ul className="list-disc list-inside text-gray-50 ">
          <li>
            You will be automatically charged unless canceled 24 hours before
            the trial ends.
          </li>
          <li>The subscription renews automatically until you cancel it.</li>
          <li>
            Canceling stops renewal, but you keep access until the end of the
            current period.
          </li>
          <li>Deleting the app does not cancel your subscription.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyClient;
