import { Suspense } from 'react'
import Title3D from '~/components/Title3D'

export default function Home() {
  return (
    <main>
      <div className='fixed left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden'>
        <Suspense fallback={<p className='animate-pulse text-3xl uppercase text-white'>loading...</p>}>
          <Title3D />
        </Suspense>
      </div>
    </main>
  )
}
