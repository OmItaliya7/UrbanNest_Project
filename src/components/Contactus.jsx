import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


const Contactus = () =>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY  
        ).then(() => {
            toast.success("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
            setLoading(false);
        }, (error) => {
            toast.error("Failed to send message. Please try again.");
            setLoading(false);
        });
    }

    


    return (
      <section id="contactus" className="py-20 bg-gray-50">
        <motion.div initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Contact <span className="underline underline-offset-4 decoration-1 font-light ">With Us</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Have questions or want to learn more? Get in touch with us!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2">Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    );
}

export default Contactus;