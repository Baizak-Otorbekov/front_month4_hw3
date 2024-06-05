import { useEffect, useState } from 'react'
import data from '../data/db.json'
import Card from './card'


function Main() {
    const [users, setUsers] = useState(data)
    const [searchvalue, setSearchValue] = useState('')

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [avatar, setAvatar] = useState('')
    const [rate, setRate] = useState('')
    function AddNewObg() {
        setUsers([...users, {
            "title": "AAAAAAAAAAA",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "AAAAAAAAAAA",
            "name": "AAAAAAAAAAA",
            "rate": 58,
            "id": "1"
        },])
    }

    console.log(searchvalue);
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };
    const filteredData = users.filter(item =>
        item.title.toLowerCase().includes(searchvalue.toLowerCase())
    );
    function AddUser() {
        setUsers([
            {
                description: description,
                title: title,
                avatar: avatar,
                name: name,
                rate: rate,
            }, ...users])
    }

    const sortData = () => {
      const sortedData = [...users].sort((a, b) => b.rate - a.rate);
      setUsers(sortedData);
  };
  const upLoad = () => {
    window.location.reload();
}
    return (
        <>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='despretion' />
                <input onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='avatar' />
                <input onChange={(e) => setRate(e.target.value)} type="text" placeholder='rate' />
                <button onClick={AddUser}>add</button>

            </div>
            <br />
            <hr />
            <input onChange={handleSearch} /> <br /><br />
            <button onClick={sortData}>сортировать по убыванию (rate)</button>
            <button onClick={upLoad}>сбросить сортировку</button>
            <section className='main'>

                {
                    filteredData.map((item) =>
                        <Card
                            title={item.title}
                            avatar={item.avatar}
                            despretion={item.despretion}
                            name={item.name}
                            rate={item.rate}
                        />)
                }
                <button onClick={AddNewObg}>add</button>
            </section>
        </>

    )
}

export default Main