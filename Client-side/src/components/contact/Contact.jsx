import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Notify function to display the success toast
  const notify = () => toast.success("Message submitted successfully!");

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        notify();  // Show success toast
        // Reset form fields after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 m-auto">
          <label className="input input-bordered flex items-center gap-5">
            Name
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-5">
            Email
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <textarea
            name="message"
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg w-full"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div>
            <button
              type="submit"
              className={`btn bg-primary mt-5 ${isSubmitting ? "btn-disabled" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </div>
      </form>

      {/* Toast container for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
