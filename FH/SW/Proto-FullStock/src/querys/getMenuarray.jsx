// src/hooks/MenuArray.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const MenuArray = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getMenu');
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return menu;
};

export default MenuArray;
