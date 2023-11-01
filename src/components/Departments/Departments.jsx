import { getDepartments } from "../../../api";
import { MainSection, MainText } from "../pages/Home.styled";
import { DepartmentList } from "./DepartmentList";

export const Departments = () => {
  const departments = getDepartments();
  return (
    <MainSection>

      <DepartmentList departments={departments} />    
            <MainText>
      <article>
      <p>В школі працює 8 відділів, які очолюють висококваліфіковані викладачі:
фортепіанний відділ №1 - завідуюча відділом Триліська Н.К., 
фортепіанний відділ №2 - Козлова Н.О., 
відділ народних інструментів - Іщук І.В., 
струнно-смичковий відділ - Головацька-Гуль Г.В., 
відділ духових та ударних інструментів - Теліна Т.К., 
відділ предмету за вибором - Лосєва Е.Л., 
відділ концертмейстерства та вокалу - Лук'янчук Н.Є., 
теоретичний відділ - Семенова Г.П.
</p>
        </article>
      </MainText>
    </MainSection>
  );
};

