import React from "react";
import config from "../data/config";

const Contact = () => {

  const c = config?.contact || {};

  const safeUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };


  return (
    <section id="contact" className="contact-section">


      <div className="contact-wrapper">


        {/* LEFT CONTACT DETAILS */}

        <div className="contact-left">


          <h2 className="section-title">
            Get In Touch
          </h2>


          <p className="section-subtitle">
            Let’s build something great together 🚀
          </p>



          <div className="contact-list">


            <a 
              className="contact-card"
              href={`mailto:${c.email}`}
            >

              <div className="contact-icon">
                ✉️
              </div>


              <div>
                <span>
                  EMAIL
                </span>

                <h3>
                  {c.email}
                </h3>
              </div>

            </a>




            {c.phone &&

            <a 
              className="contact-card"
              href={`tel:${c.phone}`}
            >

              <div className="contact-icon">
                📞
              </div>


              <div>

                <span>
                  PHONE
                </span>

                <h3>
                  {c.phone}
                </h3>

              </div>


            </a>

            }




            {c.linkedin &&

            <a
              className="contact-card"
              href={safeUrl(c.linkedin)}
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                🔗
              </div>


              <div>

                <span>
                  LINKEDIN
                </span>

                <h3>
                  {c.linkedin}
                </h3>

              </div>


            </a>

            }




            {c.github &&

            <a
              className="contact-card"
              href={safeUrl(c.github)}
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                💻
              </div>


              <div>

                <span>
                  GITHUB
                </span>


                <h3>
                  {c.github}
                </h3>


              </div>


            </a>

            }


          </div>

        </div>





        {/* RIGHT FORM */}


        <div className="contact-right">
          <h2 className="form-title">
            Send Message
          </h2>
          <form className="contact-form">


            <div className="row">

              <div>
                <label>
                  FIRST NAME
                </label>

                <input placeholder="Rahul"/>
              </div>


              <div>

                <label>
                  LAST NAME
                </label>

                <input placeholder="Kumar"/>

              </div>


            </div>




            <label>
              EMAIL
            </label>

            <input placeholder="rahul@company.com"/>




            <label>
              OPPORTUNITY TYPE
            </label>


            <select>

              <option>
                Full-time Role
              </option>

              <option>
                Freelance
              </option>

              <option>
                Contract
              </option>


            </select>





            <label>
              MESSAGE
            </label>


            <textarea
              placeholder="Tell me about the role or project..."
            />



            <button>
              SEND MESSAGE →
            </button>



          </form>


        </div>


      </div>


    </section>
  );
};


export default Contact;


