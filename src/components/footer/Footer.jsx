const Footer = () => {
  return (
    <footer className="bg-card-color text-white relative top-80 flex flex-col justify-center items-center">
      <img
        src="src/assets/imgs/a-white.png"
        className="w-36 h-36"
        alt="amirali allahverdi logo"
      />
      <p className="max-w-80 text-xl text-justify">
        بچه که بودم ، همش به این فکر میکردم که وسایل مختلف از جمله چیزای
        کامپیوتری چجوری کاری میکنن و مدام سوال میپرسیدم از خودم ، تا در نهایت با
        شخص کامپیوتر ملاقات کردم و برنامه ها و وبسایت های مختلف رو دیدم و از
        خودم پرسیدم چرا من نسازمشون ؟ <br /> و داستان ما از اونجا شروع شد ...
      </p>
      <ul className="text-4xl flex justify-between w-[20%] mt-4">
        <li>
          <a href="#">
            <i class="fi fi-brands-instagram bg-primary-gradient back-color"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fi fi-brands-telegram text-blue-500"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fi fi-brands-twitter-alt"></i>
          </a>
        </li>
      </ul>
      <span
        dir="ltr"
        className="font-semibold mt-4 text-2xl flex flex-col mb-2"
      >
        <span dir="rtl" className="back-color bg-primary-gradient">
          شماره تماس
        </span>{" "}
        0992 780 8606
      </span>
    </footer>
  );
};

export default Footer;
