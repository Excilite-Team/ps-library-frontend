import { Carousel } from "react-bootstrap";
import '../styles/slider.css';

export default function Slider() {
    let slides = [
        {
            image: 'https://www.emeraldgrouppublishing.com/sites/default/files/2020-02/ejournal_subject_-_fw_-_library_and_information_sciences.jpg',
            title: "Ko'plab kitoblar haqida ma'lumotlar endi bir joyda!",
            description: "Siz o'qigan, o'qishni hohlaydigan kitoblaringiz haqida ma'lumotlar endi bir joyda jamlangan."
        },
        {
            image: 'https://media.istockphoto.com/photos/bookshelves-and-laptops-are-placed-on-the-library-deskelearning-class-picture-id1177967778?k=20&m=1177967778&s=612x612&w=0&h=ZN9cQR6jog3wcWDsB5bUIqLRi_pLCr1Er7p6UioAQ8E=',
            title: "Ko'cha kezishning hojati yo'q!",
            description: "Siz endilikda o'z uyingizda istagan kitobingizni kutuxonadan qidirishingiz va u haqida ma'lumotlarni aniq bilib olishingiz mumkin"
        },
        {
            image: 'https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxpYnJhcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
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