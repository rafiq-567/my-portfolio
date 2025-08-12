import React from 'react'
import { profile } from '../data/Profile'


export default function Contact(){
  return (
    <section id="contact" className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <p>Email: <a href={`mailto:${profile.email}`} className="text-indigo-600">{profile.email}</a></p>
          <p>Phone: <a href={`tel:${profile.phone}`} className="text-indigo-600">{profile.phone}</a></p>
          <p>WhatsApp: <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="text-indigo-600">{profile.whatsapp}</a></p>
        </div>

        <form className="p-4 border rounded-lg">
          <input className="input w-full mb-3" placeholder="Your name" />
          <input className="input w-full mb-3" placeholder="Your email" />
          <textarea className="textarea w-full mb-3" placeholder="Message" rows="5" />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
