import "./card.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Popupcard = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    const [submissionMessage, setSubmissionMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        // Check for empty fields
        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === "") {
                errors[key] = true;
            }
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors({ ...errors });
            setSubmissionMessage("Please fill out all fields");
            return;
        }

        try {
            const response = await fetch('https://server.appnotrics.com/send-email', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmissionMessage("Thanks for contacting us!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setFormErrors({
                    name: false,
                    email: false,
                    phone: false,
                    message: false
                });
            } else {
                setSubmissionMessage("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmissionMessage("Failed to send email");
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Clear error message on input change
        if (formErrors[e.target.name]) {
            setFormErrors({
                ...formErrors,
                [e.target.name]: false
            });
        }
    };

    return (
        <div>
             <Helmet>
        <title>Into Words - Contact</title>
      </Helmet>
            <div className="khaplu_modal" id="khaplu_modal" bis_skin_checked="1" style={{ display: "block" }}></div>
            <div className="main_khaplu_popup" id="main_khaplu_popup" bis_skin_checked="1" style={{ top: "50%", opacity: "1" }}>
                <div className="khaplu_popup" bis_skin_checked="1">
                    <button className="khaplu_secondary_btn" id="khaplu_close_btn" onClick={onClose} fdprocessedid="d670xg">
                        <img src="cancel.png" alt="Close" />
                    </button>
                    <div className="khaplu_header" bis_skin_checked="1"></div>
                    <div className="khaplu_body" bis_skin_checked="1">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="khaplu_group">
                                <div className="khaplu_field" id="khaplu_fld1">
                                    <input
                                        type="text"
                                        name="name"
                                        className={formErrors.name ? "error-input" : ""}
                                        placeholder="Enter Your Name*"
                                        fdprocessedid="cey873"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.name && (
                                        <p className="error-message">Please enter your name</p>
                                    )}
                                </div>
                                <div className="khaplu_field" id="khaplu_fld2">
                                    <input
                                        type="email"
                                        name="email"
                                        className={formErrors.email ? "error-input" : ""}
                                        placeholder="Enter Email Address*"
                                        fdprocessedid="bwmf8"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.email && (
                                        <p className="error-message">Please enter your email</p>
                                    )}
                                </div>
                            </div>
                            <div className="khaplu_field" id="khaplu_fld3">
                                <input
                                    type="number"
                                    name="phone"
                                    className={formErrors.phone ? "error-input" : ""}
                                    placeholder="Enter Phone Number*"
                                    fdprocessedid="fanf5"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {formErrors.phone && (
                                    <p className="error-message">Please enter your phone number</p>
                                )}
                            </div>
                            <div className="khaplu_field" id="khaplu_fld4">
                                <textarea
                                    id="message"
                                    name="message"
                                    className={formErrors.message ? "error-input" : ""}
                                    placeholder="Write a message*"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                                {formErrors.message && (
                                    <p className="error-message">Please enter your message</p>
                                )}
                            </div>
                            <div className="khaplu_field" id="khaplu_fld5">
                                <input type="submit" className="khaplu_submit" name="submit" fdprocessedid="jm4kmc" value="Submit Now" />
                            </div>
                        </form>
                    </div>
                </div>
                {submissionMessage && (
                    <p className="submission-message text-center text-dark">{submissionMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Popupcard;
