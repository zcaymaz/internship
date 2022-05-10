import React from 'react'
import { Grid, FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import {FormInput} from './common/Input'

const StudentInfo = () => {
    return (
        <>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='İsim'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='Soyisim'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='number'
                    placeholder='Öğrenci No'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='Bölüm Adı'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='Program/Sınıf'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='number'
                    placeholder='T.C Kimlik No:'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='email'
                    placeholder='E-posta'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='number'
                    placeholder='Telefon No:'
                />
            </Grid>
            <Grid item xs={12}>
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