import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            colro: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            colro: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
        <Typography ml="21px" color="#000" mt="11px" fontWeight="bold" pb="10px" textTransform="capitalize" fontSize="22px">
            {exercise.name}
        </Typography>
    </Link>
  );
};

export default ExerciseCard;
