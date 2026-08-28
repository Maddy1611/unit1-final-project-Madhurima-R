import {useState} from 'react'
import FeelingsButton from '../../components/Buttons/FeelingsButton';

function AddPictures() {
    const [feeling, setFeeling] = useState("");
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

    if(!data.title || !data.description || !feeling) {
        alert("Please enter required fields.");
        return;
    }
    const memory = {
        ...data,
        feeling: feeling,
    };
    console.log(memory);
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

            <h4>How are you feeling</h4>
            <FeelingsButton
            feeling="Happy"
            emoji="😊"
            selectedFeeling={feeling}
            setSelectedFeeling={setFeeling}
            />
            <FeelingsButton
            feeling="Sad"
            emoji="😢"
            selectedFeeling={feeling}
            setSelectedFeeling={setFeeling}
            />
            <FeelingsButton
            feeling="Excited"
            emoji="🤩"
            selectedFeeling={feeling}
            setSelectedFeeling={setFeeling}
            />
            <FeelingsButton
            feeling="Proud"
            emoji="💪"
            selectedFeeling={feeling}
            setSelectedFeeling={setFeeling}
            />


            <button type="submit">Save Memory</button>
            <h3>Memory Saved</h3>
        </form>
    </div>
  )
}

export default AddPictures