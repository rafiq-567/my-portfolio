import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { profile } from '../data/Profile'
import photo  from '../assets/20210118_141130.jpg'
export default function Hero(){
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <h1>Hello, I am</h1>
          <h1 className="text-2xl md:text-3xl font-bold">{profile.name}</h1>
          <p className="text-indigo-600 font-semibold mt-2">{profile.designation}</p>
          <p className="mt-4 max-prose text-gray-700">{profile.intro}</p>

          <div className="flex items-center gap-3 mt-6">
            <a href={profile.resume} download className="btn btn-primary">Download Resume</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-outline">View Resume</a>
          </div>

          <div className="flex gap-3 mt-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer"><FaGithub size={22} /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={22} /></a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer"><FaTwitter size={22} /></a>
            <a href={profile.socials.facebook} target="_blank" rel="noreferrer"><FaFacebook size={22} /></a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="avatar">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
              <img src={photo} alt={profile.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
