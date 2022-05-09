import React from 'react'
import { Grid, FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import Input from './common/Input'

const StudentInfo = () => {
    return (
        <>
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
            <Grid item xs={6} marginBottom={3}>
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
        </>
    )
}

export default StudentInfo