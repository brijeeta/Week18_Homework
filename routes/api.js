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


router.put("/api/workouts/:id", (req, res) => {
    // update workout 
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration }, $push: { exercises: req.body }
        },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    // find all workouts
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

module.exports = router;