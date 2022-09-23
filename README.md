# NASA - Astronomy Photo of the Day

This app view NASA's Astronomy Photo of the Day. 

## App Description

This app allows a user to view the current date's NASA Astronomy Photo of the Day as well as photos of previous dates. 

## Planning

### Wire Frame

![NASA Wireframe (1)](https://user-images.githubusercontent.com/73357380/191969086-12c02e16-0af5-4476-99d4-42e61c2d2cd7.png)

### App Hierarchy

![NASA (1)](https://user-images.githubusercontent.com/73357380/191969392-332bc016-904f-401f-aa20-3d0678e4e147.png)

### Screenshots

#### Home Page
![Screen Shot 2022-09-23 at 8 21 06 AM](https://user-images.githubusercontent.com/73357380/191969586-481ae0bb-4052-4c9d-b1e1-6e815ff26168.png)
- User clicks "Beam Me Up" to go to the show page.

#### Show Page
![Screen Shot 2022-09-23 at 8 23 25 AM](https://user-images.githubusercontent.com/73357380/191970069-9f6036c9-59f8-436d-9d01-5b6bb4c017b4.png)
- User is able to view today's photo. 
- User is able to click 'See Previous Day...' to move to the previous days' photos.

### Code Examples

``` const PrevPhoto = () => {
    const {previousDay} = useParams()
    const next = findPrevDay(previousDay)
    console.log(next)
    const [day, setDay] = useState(previousDay)
    const [apiData, setApiData ] = useState(null)

    function findPrevDay(currentDate) {
        const splitDate = currentDate.split("-");
        let [year, month, date] = splitDate;
        year = Number(year);
        month = Number(month);
        date = Number(date);
        if (date === 1 && month === 1) {
            date = 31;
            month = 12;
            year -= 1;
        } else if (date - 1 === 0) {
            date = '31';
            month = month - 1;
        } else {
            date -= 1;
        }

        const previous = [year, month, date].join('-');
        return previous
    }
```
Code used to get current date and reformat to get previous date with conditionals to account for changes in days per month.

``` 
async function updateDay() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${day}`
        const response = await fetch (url);
        const data = await response.json();
        console.log(data)
        setApiData(data)
        console.log('current day', day)
    }
    useEffect(() => {
        setDay(previousDay)
    }, [previousDay])

    useEffect(() => {
        updateDay();
    }, [day])
```
Code used to inject previous date into API to get previous day's data.

### Technologies Used
- REACT.js
- CSS (Flex)
- HTML
- JavaScript

## Getting Started

### Link to App
https://nasa-apod-west.netlify.app/

To get started, click the app link above. Once site loads, click 'Beam Me Up' to get to the show page to view the current date's Astronomy Photo of the Day. To view the previous date's photos, click the 'See Previous Day...' link below the image to move to the previous day's photo.

### Future Goals

- Utilize Bootstrap to create a carousel.
- Include Search functionality
- Include a link to go back to the future date's photos.
- Make it mobile friendly.
