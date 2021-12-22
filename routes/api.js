const router = require("express").Router();
const Workout = require("../models/Workout");

// Server side routes
router.get("/api/workouts", (req, res) => {
    // find all workouts
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    // create new workout
    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
});















module.exports = router;