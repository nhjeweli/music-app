import Link from "next/link"
import { RiInstagramFill, RiSpotifyFill, RiSurroundSoundFill, RiYoutubeFill } from "react-icons/ri"

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />
  },
  {
    path: "#",
    icon: <RiInstagramFill />
  },
  {
    path: "#",
    icon: <RiSpotifyFill />
  },
  {
    path: "#",
    icon: <RiSurroundSoundFill />
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} className={`${iconStyles} cursor-pointer border-b-2 border-transparent`} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
