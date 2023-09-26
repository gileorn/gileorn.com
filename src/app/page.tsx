import { FileText } from 'lucide-react'
import { PersonalIntroduction } from '@/components/PersonalIntroduction'
import { PostsList } from '@/components/PostsList'

export default function AboutPage() {
  return (
    <div className='max-w-screen-md mx-auto'>
      <div className='col-span-full mb-6'></div>
      <PersonalIntroduction className='mb-20' />
      <div className=''>
        <div className='flex items-center gap-2 mb-6'>
          <FileText size={32} />
          <h2 className='text-xl font-medium'>Blog Posts</h2>
        </div>
        <PostsList />
        {/* <div className='flex items-center gap-2 mb-6'> */}
        {/*   <MapPin size={32} /> */}
        {/*   <h2 className='text-xl font-medium'>Appearences</h2> */}
        {/* </div> */}
        {/* <PostsList /> */}
      </div>
    </div>
  )
}
