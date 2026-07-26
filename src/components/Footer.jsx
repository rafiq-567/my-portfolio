import { profile } from '../data/Profile'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-base-200 py-6 mt-10 flex justify-center">
      <div className="w-full container px-4 text-center text-sm text-gray-600">
        <p>{profile.location}</p>
        <p className="flex flex-col sm:block">{profile.email}<span className="hidden sm:inline"> • </span><span className="sm:hidden" /><span>{profile.phone}</span></p>
        <p className="mt-3">© {profile.name} {year}</p>
      </div>
    </footer>
  )
}