import { useState } from "react";
import Btn, { TransBtn } from "../buttons/Btn";
import "./Home.css";

const Home = () => {
  const [isOpenSkills, setIsOpenSkills] = useState(false);

  const informationText = `
    یه پسر فرانت اند کار با شوق و ذوق و خلاق که میتونه نقاشیای پیکاسو رو هم با کد پیاده سازی کنه.
    اسم من امیرعلیه و از اصفهان بزرگ وبسایت هاتون رو برای گوگل آماده میکنم و بر خلاف سن کمی که دارم ، دو سال تجربه
    کار کردن توی مارکت رو در کارنامه خودم دارم و وبسایت هاتون رو به دست یه آدم پر ایده و تازه نفس میسپارید.
  `;

  const skillsValue = [
    {
      skill: "src/assets/imgs/icons/css.png",
    },
    {
      skill: "src/assets/imgs/icons/html.png",
    },
    {
      skill: "src/assets/imgs/icons/javascript.png",
    },
    {
      skill: "src/assets/imgs/icons/reactjs.png",
    },
  ];

  const Skill = ({ skill }) => {
    return (
      <li className="m-4">
        <img src={skill} className="w-10 h-10" alt="" />
      </li>
    );
  };

  const otherSkillsValue = [
    {
      title: "گیت و گیت هاب",
      icon: (
        <i className="fi fi-brands-github flex items-center justify-center"></i>
      ),
    },
    {
      title: "مسلط به مفاهیم UI",
      icon: (
        <i className="fi fi-sr-browser-ui flex items-center justify-center"></i>
      ),
    },
    {
      title: "مسلط به مفاهیم UX",
      icon: (
        <i className="fi fi-sr-ux-browser flex items-center justify-center"></i>
      ),
    },
    {
      title: "ادوبی ایکس دی",
      icon: (
        <i className="fi fi-brands-xd flex items-center justify-center"></i>
      ),
    },
    {
      title: "ایلاستریتور",
      icon: (
        <i className="fi fi-brands-illustrator flex items-center justify-center"></i>
      ),
    },
    {
      title: "فیگما",
      icon: (
        <i className="fi fi-brands-figma flex items-center justify-center"></i>
      ),
    },
  ];

  const OtherSkill = ({ title, icon }) => (
    <li className="bg-dark-header m-1 border-1 border-primary-purple flex justify-between items-center p-3 w-full rounded-full">
      {title}
      {icon}
    </li>
  );

  const projectsValue = [
    {
      title: "تودینگ",
      cover: "src/assets/imgs/project-thumbnail-1.png",
      src: "#",
    },
    {
      title: "رادیکال",
      cover: "src/assets/imgs/project-thumbnail-2.png",
      src: "#",
    },
    {
      title: "رادیکال",
      cover: "src/assets/imgs/project-thumbnail-2.png",
      src: "#",
    },
  ];
  const Project = ({ cover, title, src }) => (
    <li className="m-4 bg-card-color rounded-3xl border-transparent border-2 hover:border-primary-orange">
      <a href={src} className="">
        <img src={cover} className="w-72 h-56 rounded-t-3xl" alt={title} />
        <div className="flex justify-between p-4 text-xl">
          <span>{title}</span>
          <i className="fi fi-rr-arrow-up-right-from-square"></i>
        </div>
      </a>
    </li>
  );
  const Projects = () => (
    <ul className="flex">
      {projectsValue.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          cover={project.cover}
          src={project.src}
        />
      ))}
    </ul>
  );

  const commentsValue = [
    {
      name: "ستاره رفیعی",
      content:
        "من واقعا انتظار همچین کار بی نقصی را با قیمت های فوق العاده به صرفه ایشون نداشتم و فکر نمیکردم انقدر عالی باشد ، واقعا از همکاری با ایشون خوشحالم.",
    },
    {
      name: "ستاره رفیعی",
      content:
        "من واقعا انتظار همچین کار بی نقصی را با قیمت های فوق العاده به صرفه ایشون نداشتم و فکر نمیکردم انقدر عالی باشد ، واقعا از همکاری با ایشون خوشحالم.",
    },
    {
      name: "ستاره رفیعی",
      content:
        "من واقعا انتظار همچین کار بی نقصی را با قیمت های فوق العاده به صرفه ایشون نداشتم و فکر نمیکردم انقدر عالی باشد ، واقعا از همکاری با ایشون خوشحالم.",
    },
  ];

  const Comment = ({ name, content }) => (
    <li className="flex flex-col m-4 bg-card-color rounded-3xl">
      <header className="flex items-center justify-center flex-col">
        <div className="bg-blue-gradient m-2 p-2 rounded-full">
          <img
            src="src/assets/imgs/user.png"
            className="w-12 h-12"
            alt="user avatar"
          />
        </div>
        <h4 className="text-2xl">{name}</h4>
      </header>
      <main className="max-w-72 m-3 text-justify text-secondary-text bg-dark-header rounded-xl p-4">
        <p>{content}</p>
      </main>
    </li>
  );

  const Comments = () => (
    <ul className="flex">
      {commentsValue.map((comment, index) => (
        <Comment key={index} name={comment.name} content={comment.content} />
      ))}
    </ul>
  );

  const Experience = ({ title, content, backColor, path, linkTitle }) => (
    <div className="flex flex-col justify-center items-center">
      <h3 className={`text-4xl ${backColor} back-color font-semibold`}>
        {title}
      </h3>
      <div>{content}</div>
      <a
        href="#"
        className={`${backColor} p-2 w-36 flex justify-evenly items-center rounded-full`}
      >
        {linkTitle}
        <i class="fi fi-sr-arrow-up-left scale-75"></i>
      </a>
    </div>
  );

  return (
    <div className="flex text-white flex-col relative top-10 justify-center items-center">
      <header className="bg-primary-gradient rounded-full mt-10 w-fit">
        <img src="src/assets/imgs/emoji.png" className="rounded-full" alt="" />
      </header>
      <main className="mt-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-2 btn-shine">
          خلق وبسایت هایی که جون دارن !
        </h1>
        <h2 className="text-4xl bg-gradian ">با یه جوون هفده ساله</h2>
        <p className="max-w-[35rem] text-center text-secondary-text relative top-10">
          {informationText}
        </p>
        <div className="relative top-16 justify-center items-center flex w-full">
          <TransBtn title={`سفارش`} />
          <Btn title={`نمونه کار ها`} />
        </div>
        <div className="relative top-28 w-full">
          <h4 className="text-secondary-text text-2xl">مهارت های من</h4>
          <ul className="flex justify-center items-center">
            {skillsValue.map((skill, index) => (
              <Skill key={index} skill={skill.skill} />
            ))}
          </ul>
        </div>
        <div className="relative top-32">
          <button
            onClick={() => setIsOpenSkills(!isOpenSkills)}
            className="w-full bg-primary-gradient z-50 transition-all hover:scale-90 p-3 rounded-xl"
          >
            دیگر مهارت های من<i className="fa-solid fa-plus mr-4"></i>
          </button>
          <ul
            className={`w-full flex-col open-animation -z-10 items-center justify-center ${
              isOpenSkills ? "flex" : "close-animation"
            }`}
          >
            {otherSkillsValue.map((other, idnex) => (
              <OtherSkill key={idnex} title={other.title} icon={other.icon} />
            ))}
          </ul>
        </div>
        <div className="relative top-48">
          <Experience
            title={`پروژه ها`}
            content={<Projects />}
            backColor={"bg-orange-gradient"}
            linkTitle={`همه پروژه ها`}
          />
        </div>
        <div className="relative top-56">
          <Experience
            title={`تجربه کارفرمایان`}
            content={<Comments />}
            backColor={"bg-blue-gradient"}
            linkTitle={`همه نظرات`}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
