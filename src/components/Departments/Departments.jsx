import { getDepartments } from "../../../api";
import { MainSection } from "../pages/Home.styled";
import { DepartmentList } from "./DepartmentList";

export const Departments = () => {
  const departments = getDepartments();
  return (
    <MainSection>
    <DepartmentList departments={departments} />    
    </MainSection>
  );
};

