import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';




function App() {
  const[usersSearched, setUsersSearched] = useState([])
  const[inputColor, setInputColor] = useState('bg-zinc-200')
  const user1 = {'name': 'Enrique', 'id': '@Enrique'}
  const user2 = {'name': 'Enzo', 'id': '@Enzo'}
  const user3 = {'name': 'Bia', 'id': '@Bia'}
  const user4 = {'name': 'Marcia', 'id': '@Marcia'}
  const user5 = {'name': 'Alex', 'id': '@Alex'}
  const user6 = {'name': 'Messi', 'id': '@Messi'}
  const users = [user1, user2, user3, user4, user5, user6]

  const search = (event) => {
    setUsersSearched([])
    let flag = false
    const modifArray = users.forEach((i) => {
      flag = i.name.includes(event.target.value) && event.target.value != ""
      flag ? setUsersSearched((prev) => [...prev, i]) : null
    })

  }

  return (
    <div className='w-screen h-screen bg-zinc-100 flex justify-center pt-16'>
      <div className='h-[38rem] w-[29rem] shadow-xl bg-purple-200 flex flex-col gap-4 items-center pt-6 rounded'>
        <div className={`shadow-sm pl-3 border rounded-2xl focus-visible:outline-none ${inputColor} h-[2.3rem] w-[15rem] flex items-center gap-2`}>
          <AiOutlineSearch size={21}></AiOutlineSearch>
          <input type="text" className='h-[2.2rem] bg-zinc-200 focus-visible:outline-none focus-visible:bg-zinc-100' onChange={search} onFocus={() => setInputColor('bg-zinc-100')} onBlur={() => setInputColor('bg-zinc-200')}/>
        </div> 
        <div>
          <div>
            {usersSearched.map(data => (
              <div className='p-2'>
                <p>{data.name}</p>
                <p>{data.id}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
