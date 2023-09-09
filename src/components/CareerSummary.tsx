import Image from 'next/image'
import { Briefcase } from 'react-feather'
import { Widget } from './Widget'

const data = [
  {
    company: 'Manychat',
    from: 'Jun 2022',
    to: 'Present',
    jobTitle: 'Senior Software Engineer',
    duration: '1 year, 2 months',
    history: [
      {
        from: 'Mar 2023',
        to: 'Present',
        title: 'Senior Software Engineer',
        location: 'Barcelona, Spain',
      },
      {
        from: 'Jun 2022',
        to: 'Mar 2023',
        title: 'Product Enigneer',
        location: 'Yerevan, Armenia',
      },
    ],
    logo: (
      <Image
        alt='Company Logo'
        fill
        src='/img/manychat-logo.jpeg'
        style={{ objectFit: 'cover' }}
      />
    ),
  },
  {
    company: 'Yandex',
    from: 'Dec 2019',
    to: 'Jun 2022',
    duration: '3 years, 7 months',
    jobTitle: 'Frontend Developer',
    location: 'Moscow, Russia',
    history: [
      {
        from: 'May 2020',
        to: 'Jun 2022',
        title: 'Middle Frontend Developer',
        location: 'Moscow, Russia',
      },
      {
        from: 'Apr 2019',
        to: 'Apr 2020',
        title: 'Junior Frontend Developer',
        location: 'Moscow, Russia',
      },
      {
        from: 'Dec 2018',
        to: 'Mar 2019',
        title: 'Intern Frontend Developer',
        location: 'Moscow, Russia',
      },
    ],
    logo: (
      <Image
        alt='Company Logo'
        fill
        src='/img/yandex-logo.jpeg'
        style={{ objectFit: 'cover' }}
      />
    ),
  },
]

interface CareerSummaryProps {
  className: string
}

export function CareerSummary({ className }: CareerSummaryProps) {
  return (
    <Widget
      title='Career Summary'
      icon={<Briefcase width={24} height={24} />}
      className={className}
    >
      {data.map((company) => (
        <div
          className='flex items-stretch mb-4 last:mb-0'
          key={company.company}
        >
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 relative rounded-full border border-zinc-200 overflow-hidden shrink-0'>
              {company.logo}
            </div>
            <div className='h-full w-[2px] bg-zinc-300 mt-4' />
          </div>
          <div className='ml-4 w-full'>
            <div className='font-semibold'>{company.company}</div>
            <div className='text-sm text-zinc-600'>{company.duration}</div>
            <div className='mt-2'>
              {company.history.map((historyItem) => (
                <div
                  key={historyItem.from + historyItem.to}
                  className='mb-4 last:mb-0'
                >
                  <div>{historyItem.title}</div>
                  <div className='text-sm text-zinc-600'>
                    {historyItem.from} - {historyItem.to},{' '}
                    {historyItem.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Widget>
  )
}
