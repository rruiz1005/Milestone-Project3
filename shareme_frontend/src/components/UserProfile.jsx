import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from '@react-oauth/google';

import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


const UserProfile = () => {
    const [user, setUser] = useState();
    const [pins, setPins] = useState();
    const [text, setText] = useState('Created');
    const [activeBtn, setActiveBtn] = useState('created');
    const navigate = useNavigate();
    const { userId } = useParams();
    return (
        <div>
            UserProfile
        </div>
    )
}

export default UserProfile