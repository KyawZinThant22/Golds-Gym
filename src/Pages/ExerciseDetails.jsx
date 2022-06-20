import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeoptions } from "../utils/FetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
        youtubeoptions
      );
      console.log(exerciseVideosData);
      setExerciseVideo(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        name={exerciseDetails.name}
      />
       <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetails;
