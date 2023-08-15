import React, { useState } from 'react'

export default function CreateTask(props) {
  const {
    title,
    settitle,
    discription,
    setDiscription,
    status,
    setStatus,
    activeTask,
    submitHandler,
    UpdateTask
  } = props;


  return (
    <div className="container" >
      <form >
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">Title</label>
          <input type="txt" className="form-control" id="title" onChange={(event) => settitle(event.target.value)} value={title} />

        </div>
        <label htmlFor="Discription" className="form-label">Discription</label>
        <textarea className="form-control" onChange={(event) => setDiscription(event.target.value)} value={discription}></textarea>
        <label htmlFor="Title" className="form-label">Status</label>
        <select name="" id="" className="form-control" onChange={(event) => setStatus(event.target.value)} value={status}>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
          <option value="due">due</option>
        </select>
        {activeTask === null ? (
          <button onClick={submitHandler} className="btn btn-primary">
            Create Task
          </button>
        ) : (
          <button onClick={UpdateTask} className="btn btn-primary">
            Update Task
          </button>
        )}     </form>
    </div>
  )
}
