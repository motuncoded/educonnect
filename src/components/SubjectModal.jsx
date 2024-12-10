import { NavLink } from "react-router-dom";
import subjects from "../json/subjects.json";

function SubjectModal() {
  return (
    <section className="max-sm:hidden col-span-3 h-[588px] border px-4 py-6 rounded-lg bg-[#FCFEFF]">
      <h2 className="font-medium text-[22px]">Subject Categories</h2>
      <ul className="my-6 px-4">
        {subjects.map((subject, id) => {
          return (
            <li key={id} className="flex my-2">
              <NavLink
                to={subject.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-clr-surface text-clr-base"
                    : "flex  text-clr-txt-accent hover:bg-clr-surface px-4 py-2 rounded w-full transition-all"
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
    </section>
  );
}

export default SubjectModal;
