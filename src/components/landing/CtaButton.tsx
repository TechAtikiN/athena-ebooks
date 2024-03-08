import Image from 'next/image'
import Link from 'next/link'

export default function CtaBtn() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden py-32 
      bg-gradient-to-br from-blue-300 to-blue-500
      "
    >
      <div className="relative">
        <div className="mx-auto flex flex-col w-2/6 space-y-4 text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="text-lg tracking-tight text-white">
            Open your mind to new perspectives and ideas with Athena&apos;s diverse ebook collection
          </p>
          <Link
            href="/books"
            color="white"
            className="border w-1/2 mx-auto border-accent rounded-full p-2 px-4 text-slate-800 font-semibold bg-white transition duration-100 ease-in-out"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  )
}
