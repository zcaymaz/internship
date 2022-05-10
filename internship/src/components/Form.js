import React, { useState } from "react";
import { Box, Grid, Typography } from '@mui/material'
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
                <Grid container spacing={2} padding={2} direction='row'>
                    <Grid item xs={12} marginBottom={1}>
                        <div className="progressbar">
                            <div
                                style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}>
                            </div>
                        </div>
                    </Grid>
                    <Grid marginBottom={3} item xs={12}>
                        <Typography className='FormHeader'>
                            {FormTitles[page]}
                        </Typography>
                    </Grid>
                    {PageDisplay()}
                    <Grid item xs={6}>
                        <button
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                            className='FormButton'>
                            Geri
                        </button>
                    </Grid>
                    <Grid item xs={6}>
                        <button
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert("FORM SUBMITTED");
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                            className='FormButton'>
                            {page === FormTitles.length - 1 ? "Tamamla" : "İleri"}
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form