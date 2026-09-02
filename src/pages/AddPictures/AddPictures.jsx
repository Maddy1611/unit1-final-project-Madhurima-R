import React, {useState} from 'react'
import FeelingsButton from '../../components/Buttons/FeelingsButton';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Buttons/Button';
import './AddPictures.css'

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
    if(!data.title || !data.description || !data.date || !data.image || !feeling) {
        alert("Please enter required fields.");
        return;
    }
    const memory = {
        id: Date.now(),
        ...data,
        image: URL.createObjectURL(data.image),
        feeling: feeling,
    };
    addPicture(memory);
    alert("Memory added successfully!");

    setData({
        title: "",
        date: "",
        description: "",
        image: null,
        feeling: "",
    });

    setFeeling("");
};

  return (
    <div>
        <div className='header-box'>
            <Header />
        </div>
        <h3>Add your picture memory here:</h3>
        <form className='add-picture-memory' onSubmit={handleSubmit}>

            <label htmlFor="title">Title:</label>
            <input
            id = "title"
            name = "title"
            value = {data.title}
            onChange={handleChange}
            placeholder="Give your memory a name"
            required
            /><br/>

            <label htmlFor="date">Date:</label>
            <input
            id = "date"
            name = "date"
            value = {data.date}
            onChange={handleChange}
            placeholder="Date today"
            required
            /><br/>

            <label htmlFor="description">Description:</label>
            <input
            id = "description"
            name = "description"
            value = {data.description}
            onChange={handleChange}
            placeholder="Tell us about this memory"
            required
            /><br/>

            <label htmlFor="image">Add a picture</label>
            <input
            id = "image"
            name = "image"
            type = "file"
            accept = "image/*"
            onChange={(event) =>
                setData((prevData)=>({
                    ...prevData,
                    image: event.target.files[0],
                }))
            }
            placeholder="What picture do you want to add"
            required
            /><br/><br/>

            <label>Choose a feeling:</label>
            <div className='feelings-button'>

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
            </div><br/><br/>
            <button type="submit">Save Memory</button>
        </form>
        <div className='footer-box'>
            <Footer />
        </div>
    </div>
)}

export default AddPictures;