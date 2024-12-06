import { NavLink } from "react-router-dom";

const subjects = [
  { label: "Mathematics", link: "/mathematics", img: "/subject-icons/math.svg", activeImg: "/subject-icon/math-active.svg" },
 { label: "Science", link:"/science", img:"/subject-icons/science.svg" },
  { label:"Literature",link:"/literature", img:"/subject-icons/literature.svg"},
  { label: "History", link:"/history", img:"/subject-icons/history.svg" },
  { label: "Languages", link:"/languages", img:"/subject-icons/language.svg" },
  {label:"Art", link:"/art", img:"/subject-icons/art.svg"},
  { label: "Physics", link: "/physics", img: "/subject-icons/physics.svg", },
  {label:"Computer", link:"/computer", img:"/subject-icons/computer.svg"},
  { label: "Health Science", link:"/health", img:"/subject-icons/health.svg" },
  {label:"Chemistry", link:"/chemistry", img:"/subject-icons/chemistry.svg"}
];




function SubjectModal() {
  return (
    <aside className="w-[310px]  border p-4 rounded-lg bg-[#FCFEFF]">
      <h2 className="font-medium text-[22px]">Subject Categories</h2>
      <ul className="my-6 px-4">
        {subjects.map((subject, id) => {
          return (
            <li key={id} className="flex my-5">
              <NavLink
                to={subject.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-clr-surface text-clr-base"
                    : "flex text-clr-base text-[#999999]"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? subject.activeImg : subject.img}
                      alt={subject.label}
                      className="w-6 h-6 mr-3"
                    />
                    {subject.label}
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SubjectModal;
