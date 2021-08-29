import { Carousel } from "react-bootstrap";
import '../styles/slider.css';

export default function Slider() {
    let slides = [
        {
            image: '/slider1.jpg',
            title: "Ko'plab kitoblar haqida ma'lumotlar endi bir joyda!",
            description: "Siz o'qigan, o'qishni hohlaydigan kitoblaringiz haqida ma'lumotlar endi bir joyda jamlangan."
        },
        {
            image: './slider2.jpg',
            title: "Ko'cha kezishning hojati yo'q!",
            description: "Siz endilikda o'z uyingizda istagan kitobingizni kutubxonadan qidirishingiz va u haqida ma'lumotlarni aniq bilib olishingiz mumkin"
        },
        {
            image: './slider3.jpg',
            title: 'Izlasangiz, albatta topasiz!',
            description: 'Tizim orqali siz kitoblarni nomi yoki janri orqali osonlik bilan tezda topishingiz mumkin.'
        }
    ];
    return (
        <div className="slider">
            <Carousel>
                {
                    slides.map(slide => (
                        <Carousel.Item key={slide.title}>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt={slide.title}
                            />
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}