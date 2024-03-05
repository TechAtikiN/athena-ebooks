'use client'

// named imports
import { useState } from 'react'
import { tabs } from '@/constants/profile-tabs'
import { usePathname, useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { GET_USER } from '@/graphql/queries'

// default imports
import FavoritesTab from '@/components/profile/FavoritesTab'
import HomeTab from '@/components/profile/HomeTab'
import MyBooksTab from '@/components/profile/MyBooksTab'
import SettingsTab from '@/components/profile/SettingsTab'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Home')
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const { data: user } = useQuery(GET_USER, { variables: { email: session?.user?.email } })
  console.log(user)

  const handleTabChange = (tag: string) => {
    setActiveTab(tag)
    router.replace(`${pathname}?tab=${tag.toLowerCase()}`)
  }

  return (
    <div className='sm:grid sm:grid-cols-10 h-screen'>
      {/* Left Section */}
      <div className='sm:col-span-2 border-r border-accent/15 p-5'>
        <div className='flex sm:flex-col gap-3'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`flex items-center font-semibold px-3 py-2 mr-5 -ml-2 sm:rounded-r-full ${activeTab === tab.name ? 'bg-accent/30' : ''}`}
            >
              {/* tab icon  */}
              <div className={`${activeTab === tab.name ? 'text-accent' : ''}`}>{tab.icon}</div>
              {/* tab name */}
              <span className='ml-3'>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className='sm:col-span-8 py-3 sm:py-0'>
        {/* tab content */}
        {activeTab === 'Home' && <HomeTab user={user?.user} />}
        {activeTab === 'My Books' && <MyBooksTab />}
        {activeTab === 'Favorites' && <FavoritesTab />}
        {activeTab === 'Settings' && <SettingsTab />}
      </div>
    </div>
  )
}
