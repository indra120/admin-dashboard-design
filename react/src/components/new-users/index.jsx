import { User } from './user'

export function NewUsers() {
  return (
    <div className='new-users $-mt-[1.3rem]'>
      <h2>New Users</h2>
      <div className='user-list $-bg-white $-shadow-[0_2rem_3rem_rgba(132,139,200,0.18)] $-flex $-justify-around $-flex-wrap $-gap-[1.4rem] $-cursor-pointer $-transition-all $-duration-[0.3s] $-ease-[ease] $-mt-4 $-p-[1.8rem] $-rounded-[2rem]'>
        {users.map((user, i) => <User key={i} {...user} />)}

        <User image="images/plus.png" name="More" caption="New User" />
      </div>
    </div>
  )
}

const users = [
  { image: 'images/profile-2.jpg', name: 'Jack', caption: '54 Min Ago' },
  { image: 'images/profile-3.jpg', name: 'Amir', caption: '3 Hours Ago' },
  { image: 'images/profile-4.jpg', name: 'Ember', caption: '6 Hours Ago' },
]