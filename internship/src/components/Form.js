import React, { useState } from "react";
import { Box, Grid, Typography, FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import Input from './common/Input'
import StudentInfo from "./StudentInfo";
import StajKurumu from "./StajKurumu";
import Signature from "./Signature";

const Form = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

    const FormTitles = ["Öğrenci Bilgileri", "Staj Yapılacak Kurum/Kuruluşun Bilgileri:", "İmzalar"];

    const PageDisplay = () => {
        if (page === 0) {
            return <StudentInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <StajKurumu formData={formData} setFormData={setFormData} />;
        } else {
            return <Signature formData={formData} setFormData={setFormData} />;
        }
    };
    return (
        <>
            <Box className='FormCard'>
                <Grid container padding={2} direction='row' sx={{ bgcolor: 'red' }}>
                    <Grid marginBottom={3} item xs={12}>
                        <Typography className='FormHeader'>
                            {FormTitles[page]}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} marginBottom={3}>
                        <Input
                            type='text'
                            placeholder='İsim'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type='text'
                            placeholder='Soyisim'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type='number'
                            placeholder='Öğrenci No'
                        />
                    </Grid>
                    <Grid item xs={6} marginBottom={3}>
                        <Input
                            type='text'
                            placeholder='Bölüm Adı'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type='text'
                            placeholder='Program/Sınıf'
                        />
                    </Grid>
                    <Grid item xs={6} marginBottom={3}>
                        <Input
                            type='number'
                            placeholder='T.C Kimlik No:'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type='email'
                            placeholder='E-posta'
                        />
                    </Grid>
                    <Grid item xs={6} marginBottom={6}>
                        <Input
                            type='number'
                            placeholder='Telefon No:'
                        />
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                        <FormControl className="signupModalRadio">
                            <RadioGroup>
                                <FormControlLabel value='1' control={<Radio />} label="Staj 1" />
                                <FormControlLabel value='2' control={<Radio />} label="Staj 2" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <button className='FormButton'>
                            Prev
                        </button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className='FormButton'>
                            Next
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form