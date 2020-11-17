import React, { Component, useEffect, useState } from "react";
import authAxios from './authAxios'
import axios from 'axios'

const withAuth = (Component) => (props) => {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const authorize = async () => {
        setLoading(true)
        const res = await authAxios.get(`/talents/me`, {
            withCredentials: true,
            // httpOnly: true,
            // sameSite: "none",
            // secure: true,
        });
        let user = {};
        if (!res) {
            const secondRes = await axios.get(`/talents/me`, {
                withCredentials: true,
                // httpOnly: true,
                // sameSite: "none",
                // secure: true,
            });

            if (secondRes.status !== 200) {
            } else {
                // sessionStorage.setItem("accessToken", secondRes.data.accessToken);
                setUser(secondRes.data);
                setLoading(false)
            }
        } else {
            if (res.status !== 200) {
            } else {
                // sessionStorage.setItem("accessToken", res.data.accessToken);

                setUser(res.data);
                setLoading(false)
            }
        }
    };
    useEffect(() => {


        authorize();

    }, []);
    return loading ? <div>Content is loading</div> : <Component user={user} authorize={()=>authorize()}/>
};


export default withAuth;
