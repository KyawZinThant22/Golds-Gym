import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import React , {useState , useEffect} from "react";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {
    const [search ,setSearch] = useState('')
    const [bodyParts , setBodyParts] = useState([]);

    useEffect(()=>{
      const fetchExerciseData = async () => {
        const bodyPartData = await fetchData
           ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

           setBodyParts(["all", ...bodyPartData]);
      }
        fetchExerciseData();
    },[])

    const handleSearch = async () => {
        if ( search){
           const exerciseData = await fetchData
           ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        
           const searchExercise = exerciseData.filter(
             (exercise) => exercise.name.toLowerCase().includes(search)
             ||  exercise.target.toLowerCase().includes(search)
             ||  exercise.bodyPart.toLowerCase().includes(search)
             ||  exercise.equipment.toLowerCase().includes(search)
           )
           setSearch("")
           setExercises(searchExercise)
        }
    }
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        sx={{ textAlign: "center", fontSize: { lg: "40px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Search Exercises"
          value={search}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#Ff2625",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative" , width: "100%", p : "20px"}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
