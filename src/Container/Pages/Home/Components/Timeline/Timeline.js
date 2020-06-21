import React from 'react';

//import component
import { Header, Icon, Step } from "semantic-ui-react";
import {eventName,eventYear,listTimeline} from '../../../../../Config/EventDetail';

export default function Timeline(props){
    // console.log("timeline",listTimeline.length)
    return (
        <React.Fragment>
            <Header as='h1' >
                <Icon name='time' />
                <Header.Content >
                    Timeline {`${eventName} ${eventYear}`}
                    <Header.Subheader> Rangkaian Kegiatan {`${eventName} ${eventYear}`} </Header.Subheader>
                </Header.Content>
            </Header>
            <Step.Group widths={listTimeline.length}>
                {
                    listTimeline.map((konten,index) => {
                        return (
                            <Step key={index} >
                                <Icon color={konten.color} name='calendar alternate outline' />
                                <Step.Content>
                                    <Step.Title style={{ fontSize: 14 }}> {konten.tgl} </Step.Title>
                                    <Step.Description> {konten.desc} </Step.Description>
                                </Step.Content>
                            </Step>
                        )
                    })
                }
            </Step.Group>
            <p style={{ textAlign: "center" }}>*Jadwal dapat berubah sewaktu-waktu menyesuaikan situasi dan kondisi yang terjadi</p>
        </React.Fragment>
    );
}