import React, {useState} from 'react'
import FeelingsButton from '../../components/Buttons/FeelingsButton';
import Header from '../../components/Header/Header';
import Button from '../../components/Buttons/Button';

function AddPictures({addPicture}) {
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
    if(!data.title || !data.description) {
        alert("Please enter required fields.");
        return;
    }

    const memory = {
        id: Date.now(),
        ...data,
        feeling: feeling,
    };
    addPicture(memory);
    alert("Memory added successfully!");

    setData({
        title: "",
        date: "",
        description: "",
        image: "null",
        feeling: "",
    });

    setFeeling("");
};

  return (
    <div>
        <div className='header-box'>
            <Header />
        </div>
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
            name = "image"
            accept = "image/*"
            onChange={handleChange}
            placeholder="What picture do you want to add"
            required
            />

            <label>Choose a feeling</label>
            <div className='feelings-button'>

            <FeelingsButton
            feeling="Happy"
            emoji="😊"
            selectedFeeling={feeling}
            onClick={setFeeling}
            />
            <FeelingsButton
            feeling="Sad"
            emoji="😢"
            selectedFeeling={feeling}
            onClick={setFeeling}
            />
            <FeelingsButton
            feeling="Excited"
            emoji="🤩"
            selectedFeeling={feeling}
            onClick={setFeeling}
            />
            <FeelingsButton
            feeling="Proud"
            emoji="💪"
            selectedFeeling={feeling}
            onClick={setFeeling}
            />
            </div>

            <button type="submit">Save Memory</button>
        </form>
    </div>
)}

export default AddPictures;