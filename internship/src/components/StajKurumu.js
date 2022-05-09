import React from 'react'
import { Grid, FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import Input from './common/Input'

const StajKurumu = () => {
    return (
        <>
            <Grid item xs={6} marginBottom={3}>
                <Input
                    type='text'
                    placeholder='Staj Yerinin Adı'
                />
            </Grid>
            <Grid item xs={6}>
                <Input
                    type='text'
                    placeholder='Açık Adresi'
                />
            </Grid>
            <Grid item xs={6}>
                <Input
                    type='text'
                    placeholder='Üretim/Hizmet Alanı'
                />
            </Grid>
            <Grid item xs={6} marginBottom={3}>
                <Input
                    type='text'
                    placeholder='Kurumda/İşletmede çalışan toplam personel sayısı'
                />
            </Grid>
            <Grid item xs={6}>
                <Input
                    type='text'
                    placeholder='(Gerçek kişilik ise) TC no'
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
                    placeholder='Telefon numarası'
                />
            </Grid>
            <Grid item xs={6} marginBottom={3}>
                <Input
                    type='number'
                    placeholder='Faks numarası'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='(Tüzel kişilik ise) Kurum/İşletme vergi numarası'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='Vergi dairesi'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='Yetkilinin adı soyadı, görev ve unvanı'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='Web adresi'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='e-posta'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='İş veren onayı (Kaşe/İmza/Tarih)'
                />
            </Grid>
            <Grid item xs={12} marginBottom={2}>
            <Input
                    type='number'
                    placeholder='Web adresi'
                />
            </Grid>
        </>
    )
}

export default StajKurumu