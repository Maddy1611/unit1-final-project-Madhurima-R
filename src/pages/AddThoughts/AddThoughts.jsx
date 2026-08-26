import {useState} from 'react'

function AddThoughts() {
   const [data, setData] = useState({
        title: "",
        date: "",
        thought: "",
        feeling: "",
    })

const handleChange = (event) =>{
        const{name, value} = event.target;
        setData ((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

 const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data);
    }



  return (
    <div>
       <h3>Add your thoughts here:</h3>
       <form className='add-thoughts' onSubmit={handleSubmit}></form>

       <label htmlFor="title">Title:</label>
            <input
            id = "title"
            name = "title"
            value = {data.title}
            onChange={handleChange}
            placeholder="Give your memory a name"
            required
            />

            <label htmlFor="date">Date:</label>
            <input
            id = "date"
            name = "date"
            value = {data.date}
            onChange={handleChange}
            placeholder="Date today"
            required
            />

            <label htmlFor="thought">Thought:</label>
            <input
            id = "thought"
            name = "thought"
            value = {data.thought}
            onChange={handleChange}
            placeholder="Write your thoughts here"
            required
            />
    </div>
  )
}

export default AddThoughts