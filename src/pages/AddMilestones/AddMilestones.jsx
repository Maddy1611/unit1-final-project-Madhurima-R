import {useState} from 'react'
import FeelingsButton from '../../components/Buttons/FeelingsButton';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './AddMilestones.css'

function AddMilestones({addMilestone}) {
    const [feeling, setFeeling] = useState("");
   const [data, setData] = useState({
        title: "",
        date: "",
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
        if(!data.title || !data.date || !feeling) {
        alert("Please enter required field.");
        return;
    }

    const memory = {
        id: Date.now(),
        ...data,
        feeling: feeling,
    };
    addMilestone(memory);
    alert("Memory added successfully!");

    setData({
        title: "",
        date: "",
        feeling: "",
    });
setFeeling("");
 };

  return (
    <div>
        <div className='header-box'>
            <Header />
        </div>

       <h3>Add your milestones here:</h3>
       <form className='add-milestones' onSubmit={handleSubmit}>

       <label htmlFor="title">Title:</label>
            <input
            id = "title"
            name = "title"
            value = {data.title}
            onChange={handleChange}
            placeholder="Give your milestone a name"
            required
            />
            <br/>

            <label htmlFor="date">Date:</label>
            <input
            id = "date"
            name = "date"
            value = {data.date}
            onChange={handleChange}
            placeholder="Date today"
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
                /><br/><br/>
        <button type="submit">Save Memory</button>
        </form>
         <div className='footer-box'>
            <Footer />
        </div>
    </div>
  )
}

export default AddMilestones