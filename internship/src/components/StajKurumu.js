import React from 'react'
import { Grid } from '@mui/material'
import { FormInput, MultilineInput } from './common/Input'

const StajKurumu = () => {
    return (
        <>
            <Grid item xs={12}>
                <FormInput
                    type='text'
                    placeholder='Staj Yerinin Adı'
                />
            </Grid>
            <Grid item xs={12}>
                <MultilineInput
                    rows='3'
                    type='text'
                    placeholder='Açık Adresi'
                />
            </Grid>
            <Grid item xs={5.90}>
                <FormInput
                    type='text'
                    placeholder='Üretim/Hizmet Alanı'
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='Kurumda/İşletmede çalışan toplam personel sayısı'
                />
            </Grid>
            <Grid item xs={5.85}>
                <FormInput
                    type='text'
                    placeholder='(Gerçek kişilik ise) TC no'
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='email'
                    placeholder='Telefon numarası'
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='number'
                    placeholder='Faks numarası'
                />
            </Grid>
            <Grid item xs={7.87}>
                <FormInput
                    type='number'
                    placeholder='(Tüzel kişilik ise) Kurum/İşletme vergi numarası'
                />
            </Grid>
            <Grid item xs={4}>
                <FormInput
                    type='number'
                    placeholder='Vergi dairesi'
                />
            </Grid>
            <Grid item xs={5.85}>
                <MultilineInput
                    rows='3'
                    type='number'
                    placeholder='Yetkilinin adı soyadı, görev ve unvanı'
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='number'
                    placeholder='Web adresi'
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='number'
                    placeholder='Web adresi'
                />
            </Grid>
            <Grid item xs={12}>
                <MultilineInput
                    type='number'
                    placeholder='İş veren onayı (Kaşe/İmza/Tarih)'
                />
            </Grid>
        </>
    )
}

export default StajKurumu