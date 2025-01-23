document.addEventListener('DOMContentLoaded', () => {
    const culturesSection = document.getElementById('cultures');
    const cultureFoodsSection = document.getElementById('culture-foods');
    const foodsContainer = document.getElementById('foods-container');
    const cultureTitle = document.getElementById('culture-title');
    const backToCulturesBtn = document.getElementById('back-to-cultures');

    // Cultural Foods Data
    const cultureFoods = {
        newari: [
            { name: 'Yomari', description: 'Sweet rice flour dumpling', image: 'image/yomari.png' },
            { name: 'Bara', description: 'Lentil pancake', image: 'image/bara.png' },
            { name: 'Chatamari', description: 'Rice crepe', image: 'image/chatamari.png' }
        ],
        sherpa: [
            { name: 'Rindok', description: 'stew with chunks of mashed potatoes', image: 'image/rindok.png' },
            { name: 'Tingmo', description: 'Steamed bread', image: 'image/tingmo.png' },
            { name: 'Tenthuk', description: 'Hearty mountain stew', image: 'image/tenthuk.png' }
        ],
        tharu: [
            { name: 'Gengta/Kakhor/Kekhada chutney', description: 'Crab dish generally prepared by cooking with spices, and every part of the crab is eaten.', image: 'image/gengta.png' },
            { name: 'Pakuwa', description: 'Barbecued meat (especially pork or wild boar) with spices, eaten during festivals like Maghi.', image: 'image/pakuwa.png' },
            { name: 'Ghonghi', description: 'Mud-water snails found in paddy fields and streams.', image: 'image/ghongi.png' }
        ],
        "rai-limbu": [ // Added quotes to make the key valid
            { name: 'Kinema', description: 'Fermented soybeans, which are then dried and stored.', image: 'image/kinema.png' },
            { name: 'Tongba and Raksi', description: 'Alcoholic beverage prepared by fermenting millet, consumed by pouring hot water over fermented grains.', image: 'image/tongba-raksi.png' },
            { name: 'Sargemba', description: 'A blood sausage prepared from pig blood.', image: 'image/sargemba.png' }
        ],
        gurung: [
            { name: 'Sinki', description: 'A Nepali preserved fermented vegetable.', image: 'image/sinki.png' },
            { name: 'Gurung bread', description: 'A Nepali flat bread which is deep fried.', image: 'image/gurung bread.png'},
            
        ],
        tamang: [
            { name: 'Khapse', description: 'A deep-fried Tibetan biscuit.', image: 'image/khapse.png'},
            { name: 'thukpa', description: 'Noodle soup.',image: 'image/thukpa.png' },
            
        ]
    };

    // View Foods Event Listeners
    document.querySelectorAll('.view-culture-foods').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const culture = e.target.closest('.culture-card').dataset.culture;
            showCultureFoods(culture);
        });
    });

    // Show Culture Foods
    function showCultureFoods(culture) {
        culturesSection.style.display = 'none';
        cultureFoodsSection.style.display = 'block';
        cultureTitle.textContent = `${culture.charAt(0).toUpperCase() + culture.slice(1)} Cuisine Foods`;

        // Clear previous foods
        foodsContainer.innerHTML = '';

        // Add foods for the selected culture
        cultureFoods[culture].forEach(food => {
            const foodCard = document.createElement('div');
            foodCard.classList.add('food-card');
            foodCard.innerHTML = `
                <img src="${food.image}" alt="${food.name}" class="food-image">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <a href="#" class="btn">View Recipe</a>
            `;
            foodsContainer.appendChild(foodCard);
        });
    }

    // Back to Cultures
    backToCulturesBtn.addEventListener('click', () => {
        cultureFoodsSection.style.display = 'none';
        culturesSection.style.display = 'block';
    });
});
