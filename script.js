const colors = ["red", "pink", "blue", "grey", "yellow", "orange", "green", "purple"];
const backgrounds = ["https://miro.medium.com/v2/resize:fit:587/1*K4ftlEr6o_vZp82WeQsOYA.png"]; // Add URLs of your background images here
let currentNumber = 0;

function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", function() {
    const numberContainer = document.getElementById("number-container");
    const randomNumberElement = document.getElementById("random-number");
    const minInput = document.getElementById("min");
    const maxInput = document.getElementById("max");
    const sequenceModeCheckbox = document.getElementById("sequence-mode");
    const imagesModeCheckbox = document.getElementById("images-mode");

    function getRandomLetter(language) {
        let alphabet;
        
        if (language === 'englishcaps') {
            alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if (language === 'englishsmall') {
            alphabet = 'abcdefghijklmnopqrstuvwxyz';
        } else if (language === 'urdu') {
            alphabet = ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ہ', 'ھ', 'ء', 'ی', 'ے'];
        }

        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    function updateNumberAndColor() {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);
        const isSequence = sequenceModeCheckbox.checked;
        const isImages = imagesModeCheckbox.checked;
        const selectedType = document.querySelector('input[name="type"]:checked').value;
        let randomValue;
        let randomNum;

        if(isImages){
        const randomBackground = getRandomBackground();
        numberContainer.style.backgroundImage = `url(${randomBackground})`;
    }else{
        numberContainer.style.backgroundImage = `none`;
    }


        if (sequenceModeCheckbox.checked) {
            currentNumber++;
            if (currentNumber > max) currentNumber = min;
            randomNum = currentNumber-1;
        } else {
            randomNum = getRandomNumber(min, max);
        }

        const randomColor = getRandomColor();
        randomNumberElement.textContent = randomNum;
        numberContainer.style.backgroundColor = randomColor;

        if (selectedType === 'numbers') {
            randomValue = isSequence ? getNextSequenceNumber(min, max) : getRandomNumber(min, max);
        } else if (selectedType === 'englishsmall' || selectedType === 'englishcaps' || selectedType === 'urdu-letters') {
            const language = selectedType.split('-')[0];
            randomValue = isSequence ? getNextSequenceLetter(language) : getRandomLetter(language);
        }

        randomNumberElement.textContent = randomValue;

        // Add animation class
        randomNumberElement.classList.add('animate');

        // Remove animation class after the transition ends
        setTimeout(() => {
            randomNumberElement.classList.remove('animate');
        }, 500);
    }

    let currentNumber = 0;
    let currentLetterIndex = -1;

    function getNextSequenceNumber(min, max) {
        if (currentNumber > max) currentNumber = min;
        return currentNumber;
    }

    function getNextSequenceLetter(language) {

        let alphabet;
        if (language === 'englishcaps') {
            alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if (language === 'englishsmall') {
            alphabet = 'abcdefghijklmnopqrstuvwxyz';
        } else if (language === 'urdu') {
            alphabet = ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ہ', 'ھ', 'ء', 'ی', 'ے'];
        }
        
        const alphabetLength = (language === 'englishsmall' || language === 'englishcaps') ? 26 : 40;
        currentLetterIndex++;
        if (currentLetterIndex >= alphabetLength) currentLetterIndex = 0;
        return alphabet[currentLetterIndex];
    }

    const backgrounds = [
        "https://miro.medium.com/v2/resize:fit:587/1*K4ftlEr6o_vZp82WeQsOYA.png",
        "https://i.pinimg.com/736x/56/35/8e/56358e98473449c8473d87e2136f1c7c.jpg",
        "https://i.ytimg.com/vi/sQOnw20Bi8Q/maxresdefault.jpg",
        'https://5.imimg.com/data5/SELLER/Default/2023/4/299928290/FD/RJ/TH/13841671/bmw-electric-car-for-baby-a-very-beautiful-500x500.PNG',
        'https://s.alicdn.com/@sc04/kf/H651b37caf2384568a80181662ea4b383D.jpg_300x300.jpg',
        'https://m.media-amazon.com/images/I/51xltF+1NoL._AC_UY1100_.jpg',
        'https://cdn.firstcry.com/education/2023/01/03161719/The-Peacock-Story-With-Moral-For-Kids.jpg',
        'https://t3.ftcdn.net/jpg/03/77/56/44/360_F_377564428_ArCq8fvWhYVabppKvYF4uDUGZn21VvRV.jpg',
        'https://img.freepik.com/premium-vector/vector-illustration-cute-sparrow-kids-story-book_925324-11561.jpg',
        'https://www.kidsemporium.com.pk/wp-content/uploads/2019/03/dsc_2701.jpg',
        'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_5gVeaTjEbtWxmre6lZy1O8WkFXtf3jUAR1rf8vpt.jpg',
        'https://t3.ftcdn.net/jpg/05/66/98/54/360_F_566985432_rkFN4MBsAnjNJjIXCKgitq0K1l4Ksz44.jpg',
        'https://www.india.com/wp-content/uploads/2023/10/10-Most-Beautiful-Fish-Breeds-To-Keep-At-Home.png',
        'https://static-01.daraz.pk/p/4fc6e2ea78d1580a6692bcc833027b26.jpg_750x750.jpg_.webphttps://i.ytimg.com/vi/9GqaayqAkd8/sddefault.jpg',
    ];    

    function getRandomBackground() {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        return backgrounds[randomIndex];
    }

    numberContainer.addEventListener("click", updateNumberAndColor);

    // Initialize with a random number and color
    updateNumberAndColor();

    // Speech Recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const spokenNumber = event.results[0][0].transcript;
        const currentNumber = randomNumberElement.textContent;
        if (spokenNumber == currentNumber) {
            const compliments = ["Good job!", "Excellent!", "Well done!", "Perfect!"];
            const compliment = compliments[Math.floor(Math.random() * compliments.length)];
            speak(compliment);
        } else {
            speak("Try again.");
        }
    }

    recognition.onspeechend = function() {
        recognition.stop();
    }

    recognition.onerror = function(event) {
        alert('Error occurred in recognition: ' + event.error);
    }

    // Start speech recognition on click
    numberContainer.addEventListener('click', () => {
        recognition.start();
    });
});
