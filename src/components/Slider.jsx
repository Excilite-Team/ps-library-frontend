import { Carousel } from "react-bootstrap";
import '../styles/slider.css';

export default function Slider() {
    let slides = [
        {
            image: '/slider1.jpg',
            title: "Assalomu aleykum. Bu kutubxonaning online platformasi.",
            description: " Siz bu platforma orqali bir qator vaqtingizni tejaydigan amallarni bajarishingiz mumkin."
        },
        {
            image: './slider2.jpg',
            title: "Kutubxonada qanday kitoblar borligini va ular qaysi janrga tegishliligini bilishingiz",
            description: "Ular haqida - qisqacha izoh bilan tanishishingiz mumkin."
        },
        {
            image: './slider3.jpg',
            title: 'Kitoblarning hozirda mavjudligi yoki bandligini aniqlashingiz',
            description: 'Foydalanuvchi uni qachon qaytarishini bilishingiz mumkin.'
        },
        {
            image: './slider4.jpg',
            title: "O’zingizga kerak bo’lgan kitobni olish uchun navbatga yozilishingiz",
            description: "Kitobni olish uchun navbatingiz kelganini tekshirishingiz mumkin."
        },
        {
            image: './slider5.jpg',
            title: "Kutubxonachi bilan bog’lanishingiz va o’zingizni qiziqtirgan savollarga javob olishingiz mumkin!"
        },
        {
            image: './slider6.jpg',
            title: "Yangi kitoblar bilan tanishishingiz mumkin!"
        },
        {
            image: './slider7.jpg',
            title: "Maxsus filtr orqali o’zingiz qiziqadigan kitoblarni tanlab olishingiz mumkin!"
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