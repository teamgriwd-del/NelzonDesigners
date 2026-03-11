import { useState, useEffect } from "react"
import { db } from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { Star } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function ReviewsCarousel(){

const [reviews,setReviews] = useState([])
const [name,setName] = useState("")
const [message,setMessage] = useState("")
const [rating,setRating] = useState(5)


// LOAD REVIEWS FROM FIRESTORE

const loadReviews = async () => {

const querySnapshot = await getDocs(collection(db,"reviews"))

const list = []

querySnapshot.forEach((doc)=>{
list.push(doc.data())
})

setReviews(list)

}

useEffect(()=>{
loadReviews()
},[])


// SUBMIT REVIEW

const submitReview = async (e) => {

e.preventDefault()

await addDoc(collection(db,"reviews"),{

name,
message,
rating,
date:new Date().toLocaleDateString()

})

setName("")
setMessage("")

loadReviews()

}


return(

<div className="max-w-6xl mx-auto text-white mb-24">

<h2 className="text-4xl font-bold text-center mb-12">
Client Reviews
</h2>


{/* CAROUSEL */}

<Swiper
spaceBetween={30}
slidesPerView={1}
breakpoints={{
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}
>

{reviews.map((r,i)=>(

<SwiperSlide key={i}>

<div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">

<div className="flex items-center gap-3 mb-3">

<div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold">
{r.name?.charAt(0)}
</div>

<div>
<p className="font-semibold">{r.name}</p>
<p className="text-xs text-gray-300">{r.date}</p>
</div>

</div>

<div className="flex mb-2">

{[1,2,3,4,5].map((s)=>(
<Star
key={s}
size={16}
fill={r.rating >= s ? "#facc15" : "none"}
stroke="#facc15"
/>
))}

</div>

<p className="text-gray-200">
{r.message}
</p>

</div>

</SwiperSlide>

))}

</Swiper>


{/* REVIEW FORM */}

<div className="mt-16 bg-white/10 backdrop-blur-lg p-8 rounded-2xl">

<form onSubmit={submitReview} className="flex flex-col gap-4">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Your Name"
className="p-3 rounded-lg bg-white/20 outline-none"
/>

<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Share your experience..."
className="p-3 rounded-lg bg-white/20 outline-none h-28"
/>

<select
value={rating}
onChange={(e)=>setRating(Number(e.target.value))}
className="p-3 rounded-lg bg-white/20"
>

<option value={5}>★★★★★</option>
<option value={4}>★★★★</option>
<option value={3}>★★★</option>
<option value={2}>★★</option>
<option value={1}>★</option>

</select>

<button className="bg-amber-600 py-3 rounded-lg font-semibold hover:bg-amber-500">
Submit Review
</button>

</form>

</div>

</div>

)

}