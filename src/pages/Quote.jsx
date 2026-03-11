import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, User, Hammer } from "lucide-react"
import quoteBg from "../assets/quote-bg.jpg"


export default function Quote(){

const [form,setForm] = useState({
name:"",
phone:"",
email:"",
service:"Kitchen Cabinets",
budget:"",
timeline:"",
message:""
})

const [sent,setSent] = useState(false)

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const sendWhatsApp = (e)=>{

e.preventDefault()

const phoneNumber = "263715321017" // PUT COMPANY WHATSAPP NUMBER

const text = `
New Quote Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Service: ${form.service}
Budget: ${form.budget}
Timeline: ${form.timeline}

Project Details:
${form.message}
`

const url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

window.open(url,"_blank")

setSent(true)

}

return(

<div
className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center relative"
style={{ backgroundImage: `url(${quoteBg})` }}
>
    <div className="absolute inset-0 bg-black/60"></div>
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-40}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
>

<h1 className="text-5xl font-bold text-white mb-4">
Start Your Dream Project
</h1>

<p className="text-gray-200 text-lg mb-8">
Tell us about your kitchen, closet, or furniture idea.
Our team will review your request and provide a
custom quote tailored to your space and design vision.
</p>

<div className="space-y-4 text-gray-100">
<p>✔ Custom Designs Tailored To Your Home</p>
<p>✔ Professional Craftsmanship</p>
<p>✔ Transparent Pricing</p>
<p>✔ Trusted by 200+ Happy Clients</p>
</div>

</motion.div>


{/* FORM */}

<motion.div
initial={{opacity:0,x:40}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
className="bg-white p-10 rounded-2xl shadow-2xl"
>

{sent ? (

<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:0.5}}
className="text-center py-10"
>

<h2 className="text-3xl font-bold text-green-600 mb-4">
✔ Thank You!
</h2>

<p className="text-gray-600">
Your quote request is ready.
Please complete the message on WhatsApp and our team
will respond shortly.
</p>

</motion.div>

):( 

<>

<h2 className="text-2xl font-semibold mb-6 text-center">
Request a Quote
</h2>

<form onSubmit={sendWhatsApp} className="flex flex-col gap-4">


{/* NAME */}

<div className="flex items-center border rounded-lg px-3">

<User className="text-gray-400"/>

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Full Name"
className="p-3 w-full outline-none"
/>

</div>


{/* PHONE */}

<div className="flex items-center border rounded-lg px-3">

<Phone className="text-gray-400"/>

<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Phone Number"
className="p-3 w-full outline-none"
/>

</div>


{/* EMAIL */}

<div className="flex items-center border rounded-lg px-3">

<Mail className="text-gray-400"/>

<input
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email Address"
className="p-3 w-full outline-none"
/>

</div>


{/* SERVICE */}

<div className="flex items-center border rounded-lg px-3">

<Hammer className="text-gray-400"/>

<select
name="service"
value={form.service}
onChange={handleChange}
className="p-3 w-full outline-none"
>

<option>Kitchen Cabinets</option>
<option>Walk-in Closet</option>
<option>Custom Furniture</option>

</select>

</div>


{/* BUDGET */}

<select
name="budget"
value={form.budget}
onChange={handleChange}
className="border p-3 rounded-lg"
>

<option>Estimated Budget</option>
<option>$500 - $1000</option>
<option>$1000 - $3000</option>
<option>$3000+</option>

</select>


{/* TIMELINE */}

<select
name="timeline"
value={form.timeline}
onChange={handleChange}
className="border p-3 rounded-lg"
>

<option>Project Timeline</option>
<option>ASAP</option>
<option>1-3 Months</option>
<option>Flexible</option>

</select>


{/* DESCRIPTION */}

<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Describe your project..."
className="border p-3 rounded-lg h-32"
/>


{/* BUTTON */}

<button
className="bg-green-600 text-white p-4 rounded-lg font-semibold hover:bg-green-500 transition"
>

Send Quote via WhatsApp

</button>

</form>

</>

)}

</motion.div>

</div>

</div>

)

}