// import { Link } from "react-router-dom";
import { CommentText, FileContainer, FormItem, FormList, FormText, MainText, MainTitle, SectionComponent } from "./Home.styled";
// import { Button, ButtonTitle } from "../UI/Button/Button.styled";
import file1 from '../../assets/files/Заява на вступ КДМШ №22.pdf'
import file2 from '../../assets/files/Заява на пільги КДМШ№22.pdf'
import file3 from '../../assets/files/Заява КДМШ про перебіг воєнних дій.pdf'
import FileDownLoader from "../FileDownLoader/FileDownLoader";

export const Reviews = () => {
  return (
    <SectionComponent>
      <div>
        <MainTitle>Умови вступу</MainTitle>
        <MainText>
          До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту.
Навчання у школі проводиться на таких відділах:
- фортепіанному;
- струнно-смичковому: скрипка,  віолончель;
- народних інструментів: баян, акордеон, гітара;
- духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти;                                                             
- хоровому.

Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань
перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором,
повторення за вчителем нескладного ритму та мелодії.
        </MainText>
        {/* <MainText>
          Заповнити форму рєстрації для вступу можна за посиланням:
        </MainText>
        <Link to='https://forms.gle/PVcbo8fZEWQrJm4G8' target="_blank">
            <Button aria-label="registration">
              <ButtonTitle>Форма рєстрації</ButtonTitle>
          </Button>
          </Link> */}
      </div>
      <FormText>
        <MainTitle>Перелік документів, які необхідні для вступу до школи:</MainTitle>
        <FormList>
          <FormItem>
            Заява
          </FormItem>
          <FormItem>
            Копія свідоцтва про народження
          </FormItem>
          <FormItem>
            Медична довідка.
          </FormItem>
          <FormItem>
         Копія ідентифікаційного коду (за наявності)
          </FormItem>
        </FormList>
        {/* <CommentText>
          * Заява встановленого зразка заповнюється на місці.
        </CommentText> */}
       
        <CommentText>
            *Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів.
        </CommentText>
        <FormText>
          <MainTitle>
            Форми для скачування
          </MainTitle>
          <FileContainer>
            <FileDownLoader
          url={file1}
        urlName="Заява на вступ"
          />
          <FileDownLoader
          url={file2}
        urlName="Заява на пільги"
            />
             <FileDownLoader
          url={file3}
        urlName="Заява про перебіг воєнних дій"
        />
        </FileContainer>
          </FormText>
        
        
        
      </FormText>
    </SectionComponent>
  );
};
