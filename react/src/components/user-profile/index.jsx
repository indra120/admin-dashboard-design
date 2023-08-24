import logo from '@/assets/react.svg'

export function UserProfile() {
  return (
    <div className='user-profile $-flex $-justify-center $-text-center $-bg-white $-shadow-[0_2rem_3rem_rgba(132,139,200,0.18)] $-cursor-pointer $-transition-all $-duration-[0.3s] $-ease-[ease] $-mt-4 $-p-[1.8rem] $-rounded-[2rem]'>
      <div>
        <img src={logo} className='$-w-44 $-h-auto $-mb-[0.8rem] $-rounded-[50%]' />
        <h2 className='$-mb-[0.2rem]'>Ryzenix</h2>
        <p>Fullstack Web Developer</p>
      </div>
    </div>
  )
}