import React, { useState } from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

const MacroCalculatorPage = () => {
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [goal, setGoal] = useState('')
    const [activityLevel, setActivityLevel] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [weightPounds, setWeightPounds] = useState('');
    const [lbmPounds, setLbmPounds] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleCalculate = () => {
        setShowResults(true);
    };

    const resetForm = () => {
        setAge('');
        setSex('');
        setActivityLevel('');
        setHeightInches('');
        setWeightPounds('');
        setLbmPounds('');
        setShowResults(false);
    };

    const calculateData = () => {
        const heightCM = heightInches * 2.54;
        const weightKG = weightPounds / 2.205;
        const bmi = weightKG / ((heightCM / 100) * (heightCM / 100));

        const fatMass = weightPounds - lbmPounds;
        const pbf = fatMass / weightPounds * 100;

        const calcMsj = (weightKG * 9.99) + (heightCM * 6.25) - (age * 4.92);
        const totalMsj = sex === 'Male' ? calcMsj + 5 : calcMsj - 161;

        const calcKm = 370 + (21.6 * weightKG);

        const calorieTarget = (totalMsj + calcKm) / 2;

        let calorieTargetActivity = 0;

        if (activityLevel === 'Sedentary') {
            calorieTargetActivity = calorieTarget * 1.2
        }  
        if (activityLevel === 'LightlyActive') {
            calorieTargetActivity = calorieTarget * 1.375
        }
        if (activityLevel === 'ModeratelyActive') {
            calorieTargetActivity = calorieTarget * 1.55
        }
        if (activityLevel === 'VeryActive') {
            calorieTargetActivity = calorieTarget * 1.725
        }

        let calorieTargetGoal = 0;

        if (goal === 'LoseOnePound') {
            calorieTargetGoal = calorieTargetActivity - 500
        }
        if (goal === 'LoseHalfPound') {
            calorieTargetGoal = calorieTargetActivity - 250
        }
        if (goal === 'Maintain') {
            calorieTargetGoal = calorieTargetActivity
        }
        if (goal === 'GainHalfPound') {
            calorieTargetGoal = calorieTargetActivity + 250
        } 

        const waterDaily = weightPounds / 2;
        const waterHourly = waterDaily / 16;

        return {
            bmi,
            pbf,
            calorieTargetGoal,
            waterDaily,
            waterHourly,
        };
    };

    const renderResults = () => {
        const data = calculateData();

        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">Your Results</Typography>
                    <Box mt={2}>
                        <Typography>Calorie Target: {data.calorieTargetGoal.toFixed()}</Typography>
                        <Typography>BMI (kg/m²): {data.bmi.toFixed(1)}</Typography>
                        <Typography>PBF: {data.pbf.toFixed(2)}%</Typography>
                        <br />
                        <Typography>
                            Water Target:
                        </Typography>
                        <Typography sx={{ marginLeft: '16px' }}>
                            oz Per Day: {data.waterDaily.toFixed(1)}
                        </Typography>
                        <Typography sx={{ marginLeft: '16px' }}>
                            oz Per Hour: {data.waterHourly.toFixed(1)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic', marginLeft: '16px' }}>
                            based on 16 waking hours
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic', marginLeft: '16px' }}>
                            *add 16oz with electrolytes per hour of exercise
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    };


    return (
        <Container maxWidth="md">
            <br /> <br />
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Macro Calculator</Typography>
                            <Box mt={2}>
                                <TextField
                                    label="Age"
                                    variant="outlined"
                                    fullWidth
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                                    <InputLabel>Sex</InputLabel>
                                    <Select
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value)}
                                        label="Sex"
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Height (inches)"
                                    variant="outlined"
                                    fullWidth
                                    value={heightInches}
                                    onChange={(e) => setHeightInches(e.target.value)}
                                    sx={{ mt: 2 }}
                                />
                                <TextField
                                    label="Weight (pounds)"
                                    variant="outlined"
                                    fullWidth
                                    value={weightPounds}
                                    onChange={(e) => setWeightPounds(e.target.value)}
                                    sx={{ mt: 2 }}
                                />
                                <TextField
                                    label="Lean Body Mass (pounds)"
                                    variant="outlined"
                                    fullWidth
                                    value={lbmPounds}
                                    onChange={(e) => setLbmPounds(e.target.value)}
                                    sx={{ mt: 2 }}
                                />
                                <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                                    <InputLabel>Activity Level</InputLabel>
                                    <Select
                                        value={activityLevel}
                                        onChange={(e) => setActivityLevel(e.target.value)}
                                        label="Activity Level"
                                    >
                                        <MenuItem value="Sedentary">Sedentary (Little to None)</MenuItem>
                                        <MenuItem value="LightlyActive">Lightly Active</MenuItem>
                                        <MenuItem value="ModeratelyActive">Moderately Active</MenuItem>
                                        <MenuItem value="VeryActive">Very Active</MenuItem>

                                    </Select>
                                </FormControl>
                                <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                                    <InputLabel>Goal</InputLabel>
                                    <Select
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                        label="Goal"
                                    >
                                        <MenuItem value="LoseOnePound">Lose 1lb/Week</MenuItem>
                                        <MenuItem value="LoseHalfPound">Lose .5lb/Week</MenuItem>
                                        <MenuItem value="Maintain">Maintain Weight</MenuItem>
                                        <MenuItem value="GainHalfPound">Gain .5lb/Week</MenuItem>
                                    </Select>
                                </FormControl>
                                <Box mt={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                onClick={handleCalculate}
                                            >
                                                Calculate
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={resetForm}
                                            >
                                                Reset
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br /> <br />
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={7}>
                    {showResults && renderResults()}
                </Grid>
            </Grid>
            <br/>
        </Container>
    );
};

export default MacroCalculatorPage;
