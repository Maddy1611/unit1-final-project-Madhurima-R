import {useState} from 'react'

function AddPictures() {
    const [data, setData] = useState({
        title: "",
        date: "",
        description: "",
        image: null,
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
        <h3>Add your picture memory here</h3>
        <form className='add-picture-memory' onSubmit={handleSubmit}>

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

            <label htmlFor="description">Description:</label>
            <input
            id = "description"
            name = "description"
            value = {data.description}
            onChange={handleChange}
            placeholder="Tell us about this memory"
            required
            />

            <label htmlFor="image">Add a picture</label>
            <input
            id = "image"
            name = "file"
            accept = "image/*"
            onChange={handleChange}
            placeholder="What picture do you want to add"
            required
            />

            <button type="submit">Save Memory</button>
        </form>
    </div>
  )
}

export default AddPictures