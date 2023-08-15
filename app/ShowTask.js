import React from 'react'

export default function ShowTask(props) {
    const { 
        tasks ,
        updateHandler,
        deliteHandler} = props;
    let tasklist = (
        <h2 className="mt-5 w-100 text-center text-danger">Loading...</h2>
    );
    if(tasks.length>0){
        tasklist = tasks.map((task,index) => {
            return (
                <div className='container'>
                    <div className="card mt-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{task.title}</h5>
                            <p className="card-text">{task.discription}</p>
                            <h1>{task.status}</h1>
                            <button onClick={ ()=>deliteHandler(index)} className='btn btn-primary'>Delete</button>
                            <button onClick={()=>updateHandler(index)} className='btn btn-primary mx-2'>Update</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return <div className="d-flex flex-wrap">{tasklist}</div>;
}
