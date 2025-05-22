import MapGoogle from "./googlemap";

export function Contactmain() {
  return (
    <div className="contact_page">
      <div className="contact_content">
        <div className="bg-gradient-info w-1/2 px-10 py-25 rounded-2xl">
          <h2>Contact Information</h2>
          <div className="flex flex-col py-5 leading-8">
            <h4>Address</h4>
            <p>9511 NE 106th St, Vancouver, WA 98662</p>
          </div>
          <div className="flex flex-col py-5 leading-8">
            <h4>Phone</h4>
            <p>+1 (360) 921-3233</p>
          </div>
          <div className="flex flex-col py-5 leading-8">
            <h4>Working Hours</h4>
            <p>Regular business hours Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Emergency service - 24/7/365 </p>
          </div>
          <div className="flex flex-col py-5 leading-8">
            <h4>Feedback</h4>
            <p>
              Dear customers, your feedback is important to us! If you have any
              questions, comments, or inquiries, please fill out the contact
              form or reach out to us using the contact details provided above.
              We will be happy to answer all your questions and provide the
              necessary information.
            </p>
          </div>
          <div className="py-5">
            Thank you for your interest in our SMART HVAC company
          </div>
        </div>
        <div className="second_container_contact">
          <div className="bg-gradient-map flex items-center shadow-xl rounded-2xl p-7 ml-2 mt-2">
            <h2 className="social_title mx-4">Our social networks</h2>
            <div className="flex justify-evenly py-4">
              <a
                href="https://www.facebook.com/SMARTHVACLLC"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on Facebook"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/facebook.webp"
                  alt="Smart HVAC Facebook - HVAC Services in Vancouver WA and Portland OR"
                />
              </a>

              <a
                href="https://instagram.com/smart_hvac_us"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on Instagram"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/insta-logo.webp"
                  alt="Smart HVAC Instagram - Air Conditioning and Heating Services"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/smart-hvac-llc-bb4a0535b/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on LinkedIn"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/link-logo.webp"
                  alt="Smart HVAC LinkedIn - Professional HVAC Solutions"
                />
              </a>

              <a
                href="https://www.pinterest.com/SmartHVAC"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on Pinterest"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/pinterest-logo.webp"
                  alt="Smart HVAC Pinterest - HVAC Installations and Maintenance"
                />
              </a>

              <a
                href="https://www.youtube.com/@SmartHVAC-m9g"
                target="_blank"
                rel="noopener noreferrer"
                title="Subscribe to Smart HVAC on YouTube"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/youtube-logo.webp"
                  alt="Smart HVAC YouTube - HVAC Tutorials and Tips"
                />
              </a>

              <a
                href="https://x.com/SmartHVACLLC"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on Twitter"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/twitter-logo.webp"
                  alt="Smart HVAC Twitter - HVAC Updates and News"
                />
              </a>

              <a
                href="https://www.tiktok.com/@smarthhvacus"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Smart HVAC on TikTok"
              >
                <img
                  className="footer_icon"
                  src="/images/LogoFooter/tik-logo.webp"
                  alt="Smart HVAC TikTok - HVAC Installation and Repair Videos"
                />
              </a>
            </div>
          </div>
          <div className="map_content bg-gradient-map">
            <h2 className="text-center py-7">Easy to find us</h2>
            <div className="map_frame">
              <MapGoogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
