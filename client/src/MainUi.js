import React, { useEffect, useState } from 'react'
import './App.css';
function MainUi() {
    const [Name, SetName] = useState("")
    const [DateTime, SetDateTime] = useState("")
    const [Description, SetDescription] = useState("")
    const [Transcations, SetTranscations] = useState([])


    useEffect(() => {
        getTranscations().then(SetTranscations)

    }, [])

    async function getTranscations() {
        const url = 'http://localhost:8000/api/transcations';
        const responce = await fetch(url)
        return await responce.json()
    }

    function addNewTranscations(e) {
        e.preventDefault();
        // const url = process.env.REACT_APP_URL +'/transcation';
        const url = 'http://localhost:8000/api/transcation';
        const Price = Name.split(' ')[0]
        fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                Price,
                Name: Name.substring(Price.length + 1),
                Description,
                DateTime,
            })

        }).then(res => {
            res.json().then(json => {
                SetName(" ")
                SetDateTime(" ")
                SetDescription(" ")
                console.log('result', json)
            })
        })
    }

    let balance = 0;
    for (const transcation of Transcations){
        balance = balance + transcation.Price
    }
    balance = balance.toFixed(2)
    const fraction = balance.split('.')[1]
    balance = balance.split('.')[0]
    return (
        <main>
            <h1>${balance}<span>.{fraction}</span></h1>
            <form onSubmit={addNewTranscations}>
                <div className="basic">
                    <input type="text" value={Name}
                        onChange={e => SetName(e.target.value)}
                        placeholder="+200 Rice" />
                    <input type="datetime-local"
                        value={DateTime}
                        onChange={e => SetDateTime(e.target.value)} />
                </div>
                <div className="description">
                    <input type="text" value={Description}
                        onChange={e => SetDescription(e.target.value)}
                        placeholder="description" />
                </div>
                <button type='submit'>Add New Transcations</button>
            </form>
            <div className="transcations">
                {Transcations.length > 0 && Transcations.map(Transcations => (
                    <div className="transcation">
                        <div className="left">
                            <div className="name">{Transcations.Name}</div>
                            <div className="des">{Transcations.Description}.</div>
                        </div>
                        <div className="right">
                            <div className={"price" +(Transcations.Price<0?'red':'blue')}>{Transcations.Price}</div>
                            <div className="datetime">{Transcations.DateTime}</div>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default MainUi
