import React, { useState, useEffect } from 'react';
import '../CSS/Hotel.css';
import { Link } from 'react-router-dom';

function Hotel() {
    const [hotels, setHotels] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortByPrice, setSortByPrice] = useState('ascending');
    const [petFee, setPetFee] = useState(false);

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = () => {
        fetch('hotels.json')
            .then(response => response.json())
            .then(data => {
                setHotels(data.allHotels);
            })
            .catch(error => console.error('Error fetching hotels:', error));
    };

    const filteredHotels = hotels.filter(hotel => {
        return hotel.Name.toLowerCase().includes(searchText.toLowerCase()) && (!petFee || hotel.Special.toLowerCase().includes('pet fee'));
    });

    if (sortByPrice === 'ascending') {
        filteredHotels.sort((a, b) => parseFloat(a.Price.replace('Rs.', '').replace(',', '')) - parseFloat(b.Price.replace('Rs.', '').replace(',', '')));
    } else {
        filteredHotels.sort((a, b) => parseFloat(b.Price.replace('Rs.', '').replace(',', '')) - parseFloat(a.Price.replace('Rs.', '').replace(',', '')));
    }

    return (
        <div className="container">
            <header>
                <h1>Hotels and Restaurants</h1>
                <img className="Hlogo" src="hotel-1@2x.png" alt="Hotel Logo" />
            </header>
            <div id="filters">
                <input type="text" id="searchInput" placeholder="Search by name..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <label htmlFor="sortByPrice">Sort by Price:</label>
                <select id="sortByPrice" value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <label htmlFor="petFeeCheckbox">Pet Fee:</label>
                <input type="checkbox" id="petFeeCheckbox" checked={petFee} onChange={(e) => setPetFee(e.target.checked)} />
            </div>
            <div className="hotels" id="hotelsContainer">
                {filteredHotels.map(hotel => (
                    <div className="hotel1" key={hotel.Name}>
                        <Link to={`/hotel/${hotel.Name}`} className="name">
                            <img src={hotel["Image-src"]} alt={hotel.Name} />
                            {hotel.Name}
                        </Link>
                        <div className="price">Price: {hotel.Price}</div>
                        <div className="special">{hotel.Special}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotel;