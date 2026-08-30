import {useState} from 'react'
import FeelingsButton from '../../components/Buttons/FeelingsButton';

function AddMilestones() {
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
        console.log(data);
    }

  return (
    <div>
       <h3>Add your milestones here:</h3>
       <form className='add-milestones' onSubmit={handleSubmit}></form>

       <label htmlFor="title">Title:</label>
            <input
            id = "title"
            name = "title"
            value = {data.title}
            onChange={handleChange}
            placeholder="Give your milestone a name"
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
    </div>
  )
}

export default AddMilestones