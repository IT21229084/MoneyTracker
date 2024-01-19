import React, { useState } from 'react'

function MainUi() {
    const[Name, SetName] = useState("")
    const[DateTime, SetDateTime] = useState("")
    const[Description, SetDescription] = useState("")
    function addNewTranscations (){

    }
    return (
        <main>
            <h1>$400<span>.00</span></h1>
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
                    <input value={Description}
                        onChange={e => SetDescription(e.target.value)}
                        type="text" placeholder="description" />
                </div>
                <button >Add New Transcations</button>
            </form>
            <div className="transcations">
                <div className="transcation">
                    <div className="left">
                        <div className="name">New Mobile phone</div>
                        <div className="des">This is my first Mobile Phone.</div>
                    </div>
                    <div className="right">
                        <div className="price">$500</div>
                        <div className="datetime">2024-01-10 18:10</div>
                    </div>
                </div>
            </div>
            <div className="transcations">
                <div className="transcation">
                    <div className="left">
                        <div className="name">New Mobile phone</div>
                        <div className="des">This is my first Mobile Phone.</div>
                    </div>
                    <div className="right">
                        <div className="pricered">-$500</div>
                        <div className="datetime">2024-01-10 18:10</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainUi
