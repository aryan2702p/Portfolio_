'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Frontend',
      description:
        ' React.js, NEXT.js, React-Redux, Tailwind CSS, Aceternity UI, Material UI, HTML, CSS',
      slug: 'Web-Development',
      isFeatured: true,
    },
    {
      title: 'Backend & Database',
      description:
        'Node.js, NEXT.js, Express.js, Python, SQL, MOngoDB',
      slug: 'Web-Development',
      isFeatured: true,
    },
    {
      title: 'Machine-Learning',
      description:
        'OpenCV, Keras, Sciket-learn',
      slug: 'ML',
      isFeatured: true,
    },
    {
      title: 'Data Structures & Competetive Programming',
      description:
        'C/C++',
      slug: 'OOPS',
      isFeatured: true,
    },
    // Added two more webinars
    // {
    //   title: 'Live Performance Techniques',
    //   description:
    //     'Enhance your live performance skills with expert tips and strategies.',
    //   slug: 'live-performance-techniques',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Digital Music Marketing',
    //   description:
    //     'Learn how to promote your music effectively in the digital age.',
    //   slug: 'digital-music-marketing',
    //   isFeatured: true,
    // },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">SKILLS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhancing my Domain</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        {/* <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default UpcomingWebinars