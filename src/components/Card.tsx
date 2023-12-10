import Link from "next/link"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { BsFilePpt } from "react-icons/bs"

interface ICard {
  imageUrl: string
  title: string
  content: string
  tag: string
  footerLeft: string
  footerRight: string
}

export default function Card({
  imageUrl,
  title,
  content,
  tag,
  footerLeft,
  footerRight,
}: ICard) {
  return (
    <div className="rounded overflow-hidden shadow-2xl flex flex-col hover:scale-105 transition duration-150">
      <Link href="page2">
        <div className="relative">
          <img
            className="w-full"
            src={imageUrl}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {tag}
          </div>
        </div>
        <div className="px-6 py-4 mb-auto">
          <div className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {title}
          </div>
          <p className="text-gray-500 text-sm">{content}</p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <IoMdInformationCircleOutline className="text-lg" />
            <span className="ml-1">{footerLeft}</span>
          </span>
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <BsFilePpt className="text-lg" />
            <span className="ml-1">{footerRight}</span>
          </span>
        </div>
      </Link>
    </div>
  )
}
