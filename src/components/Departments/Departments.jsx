import { getDepartments } from "../../../api";
import { MainSection, MainText } from "../pages/Home.styled";
import { DepartmentInfo } from "./DepartmentDetails.styled";
import { DepartmentList } from "./DepartmentList";

export const Departments = () => {
  const departments = getDepartments();
  return (
    <MainSection>

      <DepartmentList departments={departments} />    
            <MainText>
      <article>
          <DepartmentInfo>В школі працює 8 відділів, які очолюють висококваліфіковані викладачі:
            <ul>
              <li>
              Фортепіанний відділ №1: Триліська Н.К.,
              </li>
              <li>
                Фортепіанний відділ №2: Козлова Н.О., 
              </li>
              <li>
                Відділ народних інструментів: Іщук І.В.,
              </li>
              <li>
                Струнно-смичковий відділ: Головацька-Гуль Г.В.,
              </li>
              <li>
                Відділ духових та ударних інструментів: Теліна Т.К., 
              </li>
              <li>
              Відділ предмету за вибором: Лосєва Е.Л.,
              </li>
              <li>
                Відділ концертмейстерства та вокалу: Лук'янчук Н.Є.,
              </li>
              <li>
                Теоретичний відділ: Гайова Т.М.
              </li>
            </ul>
</DepartmentInfo>
        </article>
      </MainText>
    </MainSection>
  );
};

